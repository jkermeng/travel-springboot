package cn.jk.travel.controller;


import cn.jk.travel.entity.*;
import cn.jk.travel.enums.Enums;
import cn.jk.travel.enums.Result;
import cn.jk.travel.server.imp.UserServI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.CustomAutowireConfigurer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.*;

@Controller
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserServI userServI;

    /**
     * 注册时，判断用户信息
     *
     * @return
     */
    @RequestMapping(value = "check", method = RequestMethod.GET)
    @ResponseBody
    private Boolean CheckInfo(String username) {
        User user = new User();
        user.setU_name(username);
        System.out.println(user);
        List<User> users = userServI.showUserByKey(user);
        System.out.println(users);
        if (users.size() >= 1) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 用户注册
     *
     * @return
     */
    @PostMapping("doregist")
    @ResponseBody
    private Result doregist(String username, String password) {
        User user = new User();
        user.setU_name(username);
        user.setU_password(password);
        if (null == user.getU_sex()) {
            System.out.println(user.getU_sex());
            user.setU_sex("0");
        }
        Integer regist = userServI.regist(user);
        if (regist != 0) {
            User user1 = new User();
            user1.setU_name(username);
            User login = userServI.Login(user1);
            System.out.println(login);
            return new Result(Enums.Success, login);
        } else {
            return new Result(Enums.Fail, "账号重复,输入新账号");
        }
    }

    /**
     * 用户注册
     *
     * @return
     */
    @PostMapping("doShopperRegist")
    @ResponseBody
    private Result doShopperRegist(String username, String password) {
        User user = new User();
        user.setU_name(username);
        user.setU_password(password);
        if (null == user.getU_sex()) {
            System.out.println(user.getU_sex());
            user.setU_sex("0");
        }
        Integer regist = userServI.ShopperRegist(user);
        if (regist != 0) {
            User user1 = new User();
            user1.setU_name(username);
            User login = userServI.Login(user1);
            return new Result(Enums.Success, login);
        } else {
            return new Result(Enums.Fail, "账号重复,输入新账号");
        }
    }

    @GetMapping("login")
    @ResponseBody
    private Result login(String username, String password) {
        User user = new User();
        user.setU_name(username);
        User login = userServI.Login(user);
        user.setU_password(password);
        if(null!=login){
            if (login.getU_password().equals(password)) {
                if (login.getU_stuta()==2){
                    return new Result(Enums.Fail,"账号已被禁用");
                }else {
                    return new Result(Enums.Success, login);
                }
            } else {
                return new Result(Enums.Fail, "账号密码错误");
            }
        }else {
            return new Result(Enums.Fail, "不存在该账户");
        }
    }

    /**
     * 退出登录
     *
     * @param session
     * @return
     */
    @GetMapping("logout")
    private String logout(HttpSession session) {
        session.removeAttribute("user");
        return "login";
    }



    /*用户基本功能*/

    /**
     * 修改用户
     *
     * @param user
     * @return
     */
    @GetMapping("userupdate")
    @ResponseBody
    private Result changeInfo(User user, HttpServletRequest request) {
        System.out.println(user);
        Integer update = userServI.update(user);
        List<User> users = userServI.showUserByKey(user);
        if (users.size() == 1) {
            User user1 = users.get(0);
            request.getSession().setAttribute("user", user1);
        }
        return update > 0 ? new Result(Enums.Success, "成功") : new Result(Enums.Fail, "失败");
    }

    @GetMapping("showOrder")
    @ResponseBody
    private Result showOrder(Integer id){
        List<G_Order> g_orders = userServI.showOders(id);
        return new Result(Enums.Success,g_orders);
    }
    /**
     * 修改密码
     *
     * @return
     */
//    @GetMapping("userchangpassword")
//    @ResponseBody
//    private Result changepassword(String oldPassword, String confirm_password, User user) {
//        user.setU_password(oldPassword);
//        List<User> users = userServI.showUserByKey(user);
//        if (users.size() == 1) {
//            user.setU_password(confirm_password);
//            Integer update = userServI.update(user);
//            return update > 0 ? new Result(Enums.Success, "新密码修改成功") : new Result(Enums.Fail, "新密码修改失败");
//        } else {
//            return new Result(Enums.Fail, "旧密码不正确");
//        }
//    }
//消费者模块
    @GetMapping("showOneOrderByCustomer")
    @ResponseBody
    private Result showOneOrderByCustomer(Integer id){
        G_Order g_order = userServI.showOneOrder(id);
        return new Result(Enums.Success,g_order);
    }
    @GetMapping("showOneGoodsServer")
    @ResponseBody
    private Result showOneGoodsServer(Integer id){
        List<G_Server> g_servers = userServI.showGoodsServer(id);
        return new Result(Enums.Success,g_servers);
    }
    @GetMapping("addOrder")
    @ResponseBody
    private Result addOrder(G_Order g_order){
        Integer integer = userServI.addOrder(g_order);
        return integer > 0 ? new Result(Enums.Success, "下单成功") : new Result(Enums.Fail, "下单失败");
    }

    @GetMapping("updateOrderByCustomer")
    @ResponseBody
    private Result updateOrderByCustomer(G_Order order){
        Integer integer = userServI.updateOrderByCustomer(order);
        return integer > 0 ? new Result(Enums.Success, "升级服务成功") : new Result(Enums.Fail, "升级服务失败");
    }
    @GetMapping("addPostSaleComment")
    @ResponseBody
    private Result addPostSaleComment(Post_Sale post_sale){
        Integer integer = userServI.addPost_SaleComment(post_sale);
        return integer > 0 ? new Result(Enums.Success, "售后评论成功，谢谢") : new Result(Enums.Fail, "售后评论失败");

    }
    @GetMapping("addReply")
    @ResponseBody
    private Result addReply(IC_Reply ic_reply){
        Integer integer = userServI.addReply(ic_reply);
        return integer > 0 ? new Result(Enums.Success, "回复成功，谢谢") : new Result(Enums.Fail, "回复失败");
    }

}
