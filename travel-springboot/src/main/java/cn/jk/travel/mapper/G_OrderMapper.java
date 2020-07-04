package cn.jk.travel.mapper;

import cn.jk.travel.entity.G_Order;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface G_OrderMapper extends Dao<G_Order> {
    @Override
    List<G_Order> selectAll();

    @Override
    List<G_Order> selectsByKey(G_Order g_order);

    @Override
    G_Order selectById(Integer id);

    @Override
    Integer update(G_Order g_order);

    @Override
    Integer insert(G_Order g_order);
}
