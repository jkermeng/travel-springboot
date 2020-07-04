package cn.jk.travel.server.imp;

import cn.jk.travel.entity.*;
import org.apache.ibatis.annotations.Insert;

import java.util.List;

public interface UserServI {
    List<User> showAll();
    List<User> showUserByKey(User user);
    Integer regist(User user);
    Integer ShopperRegist(User user);
    User Login(User user);
    Integer update(User user);
    Integer deleteList(List list);
    Integer deleteOne(Integer id);
    User showOne(Integer id);

//  消费者模块
    List<G_Order>showOders(Integer u_id);
    G_Order showOneOrder(Integer to_id);
    List<G_Server> showGoodsServer(Integer tg_id);
    Integer addOrder(G_Order g_order);
    Integer updateOrderByCustomer(G_Order g_order);
    Integer addPost_SaleComment(Post_Sale post_sale);
    Integer addReply(IC_Reply ic_reply);


}
