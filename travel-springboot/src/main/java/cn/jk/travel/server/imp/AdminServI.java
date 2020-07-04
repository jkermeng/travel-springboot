package cn.jk.travel.server.imp;

import cn.jk.travel.entity.Admin;
import cn.jk.travel.entity.Scenery;
import cn.jk.travel.entity.User;

import java.util.List;

public interface AdminServI {

     List<Admin> showAll();

     Admin Login(Admin admin);

     Integer add(Admin admin);

     Integer delComment(Integer tic_id);
     Integer delReply(Integer ticr_id) throws Exception;

}
