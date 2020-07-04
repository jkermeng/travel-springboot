package cn.jk.travel.controller;

import cn.jk.travel.entity.Scenery;
import cn.jk.travel.enums.Enums;
import cn.jk.travel.enums.Result;
import cn.jk.travel.server.imp.SceneryServI;
import cn.jk.travel.util.PictureUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("scenery")
public class SceneryController {
    @Autowired
    private SceneryServI sceneryServI;
    @Autowired
    private PictureUpload pictureUpload;

    @GetMapping("showAll")
    private Result showAll() {
        List<Scenery> sceneries = sceneryServI.showAll();
        return new Result(Enums.Success, sceneries);
    }

    @PostMapping("add")
    private Result addScenery(Scenery scenery, MultipartFile file) throws IOException {
        System.out.println(scenery);
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

    @GetMapping("del")
    private Result delScenery(Integer id) {
        Integer integer = sceneryServI.delScenery(id);
        if (integer > 0) {
            return new Result(Enums.Success, "删除成功");
        } else {
            return new Result(Enums.Fail, "删除失败");
        }
    }

}
