package cn.jk.travel.controller;

import cn.jk.travel.entity.Information;
import cn.jk.travel.entity.Information_Comment;
import cn.jk.travel.enums.Enums;
import cn.jk.travel.enums.Result;
import cn.jk.travel.server.imp.InformationServI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("info")
public class InformationController {
    @Autowired
    private InformationServI informationServI;

    @GetMapping("showAll")
    private Result showAll() {
        List<Information> information = informationServI.showAllInformation();
        return new Result(Enums.Success, information);
    }

    @GetMapping("showDetails")
    private Result showOneDetail(Integer id) {
        Information information = informationServI.showDetailsInformation(id);
        return new Result(Enums.Success, information);
    }

    @GetMapping("addComment")
    private Result addComment(Information_Comment information_comment) {
        Integer integer = informationServI.addComments(information_comment);
        if (integer > 0) {
            return new Result(Enums.Success, "评论成功");
        } else {
            return new Result(Enums.Fail, "评论失败");
        }

    }
}
