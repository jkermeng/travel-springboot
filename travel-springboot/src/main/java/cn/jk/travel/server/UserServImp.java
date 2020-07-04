package cn.jk.travel.server;

import cn.jk.travel.entity.*;
import cn.jk.travel.mapper.*;
import cn.jk.travel.server.imp.GoodsServI;
import cn.jk.travel.server.imp.UserServI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class UserServImp implements UserServI {
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private G_OrderMapper g_orderMapper;

    /**
     * 注册
     *
     * @param user
     * @return
     */
    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer regist(User user) {
        user.setCreateTime(new Date());
        user.setUpdateTime(new Date());
        Role role = new Role();
        role.setRole_Id(3);
        user.setRole_id(role);
        user.setU_nickname(UUID.randomUUID().toString());
        System.out.println(user);
        User user1 = userMapper.selectOneByKey(user);
        if (user1 == null) {
            return userMapper.regist(user);
        } else {
            return 0;
        }
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer ShopperRegist(User user) {
        user.setCreateTime(new Date());
        user.setUpdateTime(new Date());
        Role role = new Role();
        role.setRole_Id(2);
        user.setRole_id(role);
        user.setU_nickname(UUID.randomUUID().toString());
        System.out.println(user);
        User user1 = userMapper.selectOneByKey(user);
        if (user1 == null) {
            return userMapper.regist(user);
        } else {
            return 0;
        }
    }

    /**
     * 登录
     *
     * @param user
     * @return
     */
    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public User Login(User user) {
        return userMapper.selectOneByKey(user);
    }

    /**
     * 显示所有用户
     *
     * @return
     */
    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public List<User> showAll() {
        return userMapper.selectAll();
    }

    /**
     * 根据关键词查找用户
     *
     * @param user
     * @return
     */
    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public List<User> showUserByKey(User user) {
        return userMapper.selectByKey(user);
    }

    /**
     * 通过id删除用户
     *
     * @param id
     * @return
     */
    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer deleteOne(Integer id) {
        List arrayList = new ArrayList();
        arrayList.add(id);
        return userMapper.deleteByList(arrayList);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public User showOne(Integer id) {
        return userMapper.selectById(id);
    }

    //消费者模块
    @Autowired
    private Post_SaleMapper post_saleMapper;

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public List<G_Order> showOders(Integer u_id) {
        G_Order g_order = new G_Order();
        g_order.setTu_id(u_id);
        List<G_Order> g_orders = g_orderMapper.selectsByKey(g_order);
        if (g_orders.size() > 0) {
            for (G_Order g_order1 : g_orders
            ) {
                if (null != g_order1.getTps_id() && g_order1.getTo_status() != 1) {
                    Post_Sale post_sale = new Post_Sale();
                    post_sale.setTo_id(g_order1.getTps_id());
                    Post_Sale post_sale1 = post_saleMapper.selectById(g_order1.getTps_id());
                    if (null != post_sale1) {
                        g_order1.setPost_sale(post_sale1);
                    }
                }
            }
        }
        return g_orders;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public G_Order showOneOrder(Integer to_id) {
        G_Order g_order = g_orderMapper.selectById(to_id);
        return g_order;
    }

    @Autowired
    private G_ServerMapper g_serverMapper;

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public List<G_Server> showGoodsServer(Integer tg_id) {
        G_Server g_server = new G_Server();
        g_server.setTg_id(tg_id);
        List<G_Server> g_servers = g_serverMapper.selectsByKey(g_server);
        return g_servers;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer addOrder(G_Order g_order) {
        if (null == g_order.getTo_name()) {
            g_order.setTo_name("无");
        }
        g_order.setTo_createTime(new Date());
        return g_orderMapper.insert(g_order);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer updateOrderByCustomer(G_Order g_order) {
        return g_orderMapper.update(g_order);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer addPost_SaleComment(Post_Sale post_sale) {
        post_sale.setTps_createTime(new Date());
        if (null == post_sale.getTps_commment() || post_sale.getTps_commment().equals("")) {
            post_sale.setTps_commment("暂无评论");
        }
        Integer insert = post_saleMapper.insert(post_sale);
        System.out.println("xxxxxxxxxxxxxxxxx" + post_sale.getTps_id());
        G_Order g_order = new G_Order();
        g_order.setTo_id(post_sale.getTo_id());
        g_order.setTps_id(post_sale.getTps_id());
        g_orderMapper.update(g_order);
        return insert;
    }

    @Autowired
    private IC_ReplyMapper ic_replyMapper;

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer addReply(IC_Reply ic_reply) {
        ic_reply.setTicr_createTime(new Date());
        return ic_replyMapper.insert(ic_reply);
    }

    //消费者模块end


    /**
     * 批量删除用户
     *
     * @param list
     * @return
     */
    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer deleteList(List list) {
        return userMapper.deleteByList(list);
    }

    /**
     * 更新用户信息
     *
     * @param user
     * @return
     */
    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer update(User user) {
        return userMapper.update(user);
    }


}
