package cn.jk.travel.controller;

import cn.jk.travel.entity.Admin;
import cn.jk.travel.entity.User;
import cn.jk.travel.enums.Enums;
import cn.jk.travel.enums.Result;
import cn.jk.travel.server.imp.AdminServI;
import cn.jk.travel.server.imp.UserServI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.util.List;
import java.util.UUID;

@Controller
public class TestController {
    @Autowired
    private AdminServI adminServI;
    @Autowired
    private UserServI userServI;

    @RequestMapping("test1")
    @ResponseBody
    private Result test1() {

        return new Result(Enums.Success, "");
    }

    //    @RequiresRoles("admin")
//    @RequiresPermissions("add")
    @RequestMapping("test2")
    private String test2() {

        return "index";
    }

    @RequestMapping("test3")
    @ResponseBody
    private String test3() {
        System.out.println("登录成功了");
        return "success";
    }

    @RequestMapping("test4")
    private String test4() {

        return "login";
    }

    @RequestMapping("test5")
    @ResponseBody
    private String test5() {

        return "userlogin";
    }

    @RequestMapping("test6")
    @ResponseBody
    private  Result test6(String username, String password) {
        System.out.println(username + "==" + password);
        return new Result(Enums.Success,"小程序成功");
    }

    @GetMapping("test7")
    private String test7() {

        return "video";
    }

    @RequestMapping("logout")
    private String logout() {

        return "userlogin";
    }

    /*文件上传*/
    @PostMapping("upload")
    @ResponseBody
    private Result uploadFile(HttpServletRequest request, MultipartFile file) {
        try {
            String realPath = request.getSession().getServletContext().getRealPath("/") + "/cache";
            System.out.println(realPath);
            File file1 = new File(realPath);
            if (!file1.exists()) {
                file1.mkdirs();
            }
            executeUpload(realPath, file);
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(Enums.Fail, e.getMessage());
        }


        return new Result(Enums.Success, "成功上传文件");
    }

    private void executeUpload(String uploadDir, MultipartFile file) throws Exception {
        System.out.println("获取网页中的上传文件标签内的name属性名:" + file.getName());
        System.out.println("getSize:" + file.getSize() / 1024 + "Kb");
        System.out.println("上传时的文件名:" + file.getOriginalFilename());
        System.out.println("文件类型" + file.getContentType());
        System.out.println("inputstream");
        System.out.println("resource");
        //文件后缀名
        String suffix = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
        System.out.println(suffix);
        //上传文件名
        String filename = UUID.randomUUID() + suffix;
        System.out.println("存到数据库的路径：cache/" + filename);
        //服务器端保存的文件对象
        File serverFile = new File(uploadDir + filename);
        //将上传的文件写入到服务器端文件内
        file.transferTo(serverFile);

    }

    private boolean deleteExist(String dirPath, HttpServletRequest request) {
        String realPath = request.getSession().getServletContext().getRealPath("/") + dirPath;
        File file = new File(realPath);
        if (file.exists()) {
            file.delete();
            return true;
        } else {
            return false;
        }

    }
    /*文件上传end*/
}
