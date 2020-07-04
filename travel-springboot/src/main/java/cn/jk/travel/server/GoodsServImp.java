package cn.jk.travel.server;

import cn.jk.travel.entity.*;
import cn.jk.travel.entity.util.Goods_Total;
import cn.jk.travel.mapper.*;
import cn.jk.travel.server.imp.GoodsServI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;

@Service
public class GoodsServImp implements GoodsServI {
    @Autowired
    private GoodsMapper goodsMapper;
    @Autowired
    private TG_ImgMapper tg_imgMapper;
    @Autowired
    private G_ServerMapper g_serverMapper;
    @Autowired
    private G_OrderMapper g_orderMapper;
    @Autowired
    private Post_SaleMapper post_saleMapper;

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public List<Goods> showAll() {
        List<Goods> goods = goodsMapper.selectAll();
        for (int i = 0; i < goods.size(); i++
        ) {
            User user = goods.get(i).getShopper();
            if (user.getU_stuta() == 2) {
                goods.remove(goods.get(i));
                i = 0;
            } else {
                List<TG_Img> tg_imgs = tg_imgMapper.selectsByKey(new TG_Img(goods.get(i).getTg_id()));
                if (tg_imgs.size() > 0) {
                    goods.get(i).setTg_img(tg_imgs.get(0));
                }
                G_Server g_server = new G_Server();
                g_server.setTg_id(goods.get(i).getTg_id());
                List<G_Server> g_servers = g_serverMapper.selectsByKey(g_server);
                if (g_servers.size() > 0) {
                    goods.get(i).setG_serverList(g_servers);
                }
            }
        }
        return goods;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public Goods showDetails(Integer tg_id) {
        Goods goods = goodsMapper.selectById(tg_id);
        List<TG_Img> tg_imgs = tg_imgMapper.selectsByKey(new TG_Img(goods.getTg_id()));
        if (tg_imgs.size() > 0) {
            goods.setTg_imgList(tg_imgs);
        }
        G_Server g_server = new G_Server();
        g_server.setTg_id(goods.getTg_id());
        List<G_Server> g_servers = g_serverMapper.selectsByKey(g_server);
        if (g_servers.size() > 0) {
            goods.setG_serverList(g_servers);
        }
        G_Order g_order = new G_Order();
        g_order.setTg_id(goods.getTg_id());
        List<G_Order> g_orders = g_orderMapper.selectsByKey(g_order);
        if (g_orders.size() > 0) {
            List<Post_Sale> post_saleList = new ArrayList<>();
            for (G_Order go : g_orders
            ) {
                if (null != go.getTps_id() && go.getTo_status() != 1) {
                    Post_Sale post_sale = new Post_Sale();
                    post_sale.setTo_id(go.getTo_id());
                    List<Post_Sale> post_sales = post_saleMapper.selectsByKey(post_sale);
                    if (post_sales.size() > 0) {
                        post_saleList.add(post_sales.get(0));
                    }
                }
            }
            goods.setPost_saleList(post_saleList);
        }
        return goods;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Goods addGoods(Goods goods) {
        goods.setTg_createTime(new Date());
        goodsMapper.insert(goods);
        return goods;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer addGoodsImg(TG_Img tg_img) {
        return tg_imgMapper.insert(tg_img);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public List<Goods> showGoodsByShopperId(Integer tu_id) {
        Goods goods = new Goods();
        goods.setTu_id(tu_id);
        List<Goods> goods1 = goodsMapper.selectsByKey(goods);
        if (goods1.size() > 0) {
            for (Goods goods2 : goods1
            ) {
                List<TG_Img> tg_imgs = tg_imgMapper.selectsByKey(new TG_Img(goods2.getTg_id()));
                G_Server g_server = new G_Server();
                g_server.setTg_id(goods2.getTg_id());
                List<G_Server> g_servers = g_serverMapper.selectsByKey(g_server);
                if (g_servers.size() > 0) {
                    goods2.setG_serverList(g_servers);
                }
                goods2.setTg_imgList(tg_imgs);
            }
        }
        return goods1;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public Goods showOneGoods(Integer tg_id) {
        Goods goods = goodsMapper.selectById(tg_id);
        List<TG_Img> tg_imgs = tg_imgMapper.selectsByKey(new TG_Img(goods.getTg_id()));
        goods.setTg_imgList(tg_imgs);
        return goods;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer delGoodsImg(Integer tgi_id) {
        TG_Img tg_img = new TG_Img();
        tg_img.setTtgi_id(tgi_id);
        return tg_imgMapper.delete(tg_img);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer addGoodsServer(G_Server g_server) {
        return g_serverMapper.insert(g_server);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer updateGoodsServer(G_Server g_server) {
        return g_serverMapper.update(g_server);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public List<G_Order> showGOrderByShopper(Integer tu_id) {
        ArrayList<G_Order> g_orders = new ArrayList<>();
        Goods goods = new Goods();
        goods.setTu_id(tu_id);
        List<Goods> goods1 = goodsMapper.selectsByKey(goods);
        if (goods1.size() > 0) {
            for (Goods g : goods1
            ) {
                G_Order g_order = new G_Order();
                g_order.setTg_id(g.getTg_id());
                List<G_Order> g_orders1 = g_orderMapper.selectsByKey(g_order);
                if (g_orders1.size() > 0) {
                    g_orders.addAll(g_orders1);
                }
            }
        }
        return g_orders;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer updateOrderByShopper(G_Order g_order) {
        return g_orderMapper.update(g_order);
    }

    @Autowired
    private UserMapper userMapper;

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public HashSet<User> showBadGoods(Integer num) {
        List<Goods> goods = new ArrayList<>();
        List<Post_Sale> post_saleList = post_saleMapper.selectAll();
        if (post_saleList.size() > 0) {
            for (Post_Sale ps : post_saleList
            ) {
                if (ps.getTps_score() <= 2) {
                    G_Order g_order = g_orderMapper.selectById(ps.getTo_id());
                    Goods goods1 = goodsMapper.selectById(g_order.getTg_id());
                    goods.add(goods1);
                }
            }
        }
        List<Goods> goods1 = new ArrayList<>();
        if (goods.size() > 0) {
            for (int i = 0; i < goods.size(); i++) {
                int index = goods.get(i).getTu_id();
                int nums = 1;
                for (int j = i + 1; j < goods.size(); j++) {
                    if (index == goods.get(j).getTu_id()) {
                        nums++;
                    }
                }
                if (nums >= num) {
                    goods1.add(goods.get(i));
                }
            }
        }
        HashSet<User> userList = new HashSet<>();
        if (goods1.size() > 0) {
            for (Goods gs : goods1
            ) {
                User user = userMapper.selectById(gs.getTu_id());
                userList.add(user);
            }
        }
        return userList;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public List<Goods_Total> showShopperChart(Integer tu_id) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");

        List<Goods_Total> goods_totals = new ArrayList<>();
        List<G_Order> g_orders = showGOrderByShopper(tu_id);
        for (int i = 0; i < g_orders.size(); i++
        ) {
            Goods_Total goods_total = new Goods_Total();
            goods_total.setId(i + 1);
            int num = 1;
            double total = g_orders.get(i).getTo_price();
            for (int j = i + 1; j < g_orders.size();
            ) {
                String first = simpleDateFormat.format(g_orders.get(i).getTo_createTime());
                String second = simpleDateFormat.format(g_orders.get(j).getTo_createTime());
                System.out.println(first + "====" + second);
                System.out.println(first.equals(second));
                if (g_orders.get(i).getTg_id() == g_orders.get(j).getTg_id() && first.equals(second)) {
                    num++;
                    total += g_orders.get(j).getTo_price();
                    j = i + 1;
                    g_orders.remove(g_orders.get(j));
                } else {
                    j++;
                }
            }
            if (num == 1) {
                goods_total.setNum(num);//数量
                goods_total.setTotal(g_orders.get(i).getTo_price());//总价
                goods_total.setSaleDate(g_orders.get(i).getTo_createTime());//日期
                goods_total.setTg_id(g_orders.get(i).getTg_id());
                goods_totals.add(goods_total);
            } else {
                goods_total.setNum(num);//数量
                goods_total.setTotal(total);//总价
                goods_total.setSaleDate(g_orders.get(i).getTo_createTime());//日期
                goods_total.setTg_id(g_orders.get(i).getTg_id());
                goods_totals.add(goods_total);
            }
            System.out.println(num);
        }
        for (Goods_Total gt : goods_totals
        ) {
            Goods goods = goodsMapper.selectById(gt.getTg_id());
            gt.setGoods(goods);
        }
        return goods_totals;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer delGoods(Integer tg_id) {
        Goods goods = new Goods();
        goods.setTg_id(tg_id);
        return goodsMapper.delete(goods);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer updateGoods(Goods goods) {
        return goodsMapper.update(goods);
    }


}
