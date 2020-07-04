package cn.jk.travel.server.imp;

import cn.jk.travel.entity.Information;
import cn.jk.travel.entity.Information_Comment;
import cn.jk.travel.entity.TI_Img;

import java.util.List;

public interface InformationServI {
    List<Information> showAllInformation();
    Information showDetailsInformation(Integer ti_id);
    Integer delInformation(Integer ti_id);
    Integer addInformation(Information information);
    Integer addInfoImg(TI_Img ti_img);

    Integer addComments(Information_Comment information_comment);
}
