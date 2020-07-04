package cn.jk.travel.controller;

import cn.jk.travel.entity.*;
import cn.jk.travel.enums.Enums;
import cn.jk.travel.enums.Result;


import cn.jk.travel.server.imp.*;
import cn.jk.travel.util.PictureUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.UUID;

@Controller
public class AdminController {
    @Autowired
    private AdminServI adminServI;
    @Autowired
    private GoodsServI goodsServI;
    @Autowired
    private UserServI userServI;

    @RequestMapping(value = "dologin", method = RequestMethod.GET)
    @ResponseBody
    private Result Login(String username, String password) {
        Admin admin = new Admin();
        admin.setName(username);
        Admin login = adminServI.Login(admin);
        if (null != login && password.equals(login.getPassword())) {
            return new Result(Enums.Success, login);
        } else {
            return new Result(Enums.Success, "账户密码错误");
        }
    }

    @GetMapping("showBadGoods")
    @ResponseBody
    private Result showBadGoods(Integer num) {
        if (null == num && (num == 1 || num != 0)) {
            return new Result(Enums.Success, "太少了请放过人家");
        } else {
            HashSet<User> goods = goodsServI.showBadGoods(num);
            return new Result(Enums.Success, goods);
        }
    }

    @GetMapping("updateShopperStatus")
    @ResponseBody
    private Result updateShopperStatus(User user) {
        Integer integer = userServI.update(user);
        if (integer > 0) {
            return new Result(Enums.Success, "修改了商家的状态");
        } else {
            return new Result(Enums.Fail, "修改了商家的状态失败");
        }
    }

    @Autowired
    private SceneryServI sceneryServI;
    @Autowired
    private PictureUpload pictureUpload;

    @PostMapping("addScenery")
    @ResponseBody
    private Result addScenery(Scenery scenery, MultipartFile file) throws IOException {
        if (file.getSize() != 0) {
            System.out.println("文件名称" + file.getOriginalFilename());
            String substring = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf("."));
            if (substring.equals(".jpg") || substring.equals(".png")) {
                String fileName = "img/scen/" + UUID.randomUUID().toString() + substring;
                //添加入photo数据库
                scenery.setTs_url(fileName);
                String uuid = "/" + fileName;
                pictureUpload.uploadPicture(uuid, file.getInputStream());
                Integer integer = sceneryServI.addScenery(scenery);
                return integer > 0 ? new Result(Enums.Success, "添加图片成功") : new Result(Enums.Fail, "添加图片失败");
            } else {
                return new Result(Enums.Fail, "上传文件错误");
            }
        } else {
            return new Result(Enums.Fail, "没有上传如何文件");
        }
    }

    @GetMapping("delScenery")
    @ResponseBody
    private Result delScenery(Scenery scenery) {
        pictureUpload.delPicture(scenery.getTs_url());
        Integer integer = sceneryServI.delScenery(scenery.getTs_id());
        if (integer > 0) {
            return new Result(Enums.Success, "删除成功");
        } else {
            return new Result(Enums.Fail, "删除失败");
        }
    }

    @GetMapping("delComment")
    @ResponseBody
    private Result delComment(Integer tic_id) {
        Integer integer = 0;
        if (null != tic_id && tic_id != 0) {
            integer = adminServI.delComment(tic_id);
        }
        if (integer > 0) {
            return new Result(Enums.Success, "删除成功");
        } else {
            return new Result(Enums.Fail, "删除失败");
        }
    }

    @GetMapping("delReply")
    @ResponseBody
    private Result delReply(Integer ticr_id) throws Exception {
        Integer integer = 0;
        if (null != ticr_id && ticr_id != 0) {
            integer = adminServI.delReply(ticr_id);
        }
        if (integer > 0) {
            return new Result(Enums.Success, "删除成功");
        } else {
            return new Result(Enums.Fail, "删除失败");
        }
    }

    @Autowired
    private InformationServI informationServI;

    @PostMapping("addInformation")
    @ResponseBody
    private Result addInformation(Information information, @RequestParam("file") MultipartFile files[]) throws IOException {
        informationServI.addInformation(information);
        if (null != information.getTi_id()) {
            if (null != files && files.length >= 1) {
                for (MultipartFile file : files
                ) {
                    System.out.println("文件名称" + file.getOriginalFilename());
                    String substring = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf("."));
                    if (substring.equals(".jpg") || substring.equals(".png")) {
                        String fileName = "img/" + UUID.randomUUID().toString() + substring;
                        //添加入photo数据库
                        TI_Img ti_img = new TI_Img();
                        ti_img.setTi_id(information.getTi_id());
                        ti_img.setTtii_url(fileName);
                        informationServI.addInfoImg(ti_img);
                        String uuid = "/" + fileName;
                        pictureUpload.uploadPicture(uuid, file.getInputStream());
                    } else {
                        return new Result(Enums.Fail, "上传文件类型错误！");
                    }
                }
                return new Result(Enums.Success, "上传成功！");
            }
            return new Result(Enums.Success, "添加成功");
        } else {
            return new Result(Enums.Success, "添加失败");
        }
    }

    @GetMapping("showAllShopper")
    @ResponseBody
    private Result showAllShopper() {
        List<User> userList = userServI.showAll();
        for (int i = 0; i < userList.size(); i++) {
            if (userList.get(i).getRole_id().getRole_Id() != 2) {
                userList.remove(userList.get(i));
                i = 0;
            }
        }
        return new Result(Enums.Success, userList);
    }
}
