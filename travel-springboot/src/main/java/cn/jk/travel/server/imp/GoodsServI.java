package cn.jk.travel.server.imp;

import cn.jk.travel.entity.*;
import cn.jk.travel.entity.util.Goods_Total;
import org.springframework.core.annotation.Order;

import java.util.HashSet;
import java.util.List;

public interface GoodsServI {
    List<Goods> showAll();
    Goods showDetails(Integer tg_id);
    Integer delGoods(Integer tg_id);
    Integer updateGoods(Goods goods);
    Goods addGoods(Goods goods);
    Integer addGoodsImg(TG_Img tg_img);

    List<Goods> showGoodsByShopperId(Integer tu_id);
    Goods showOneGoods(Integer tg_id);
    Integer delGoodsImg(Integer tgi_id);
    Integer addGoodsServer(G_Server g_server);
    Integer updateGoodsServer(G_Server g_server);

    List<G_Order> showGOrderByShopper(Integer tu_id);
    Integer updateOrderByShopper(G_Order g_order);

    HashSet<User> showBadGoods(Integer num);

    List<Goods_Total> showShopperChart(Integer tu_id);
}
