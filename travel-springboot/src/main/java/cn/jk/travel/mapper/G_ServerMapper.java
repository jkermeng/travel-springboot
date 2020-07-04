package cn.jk.travel.mapper;

import cn.jk.travel.entity.G_Server;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface G_ServerMapper extends Dao<G_Server> {
    @Override
    List<G_Server> selectAll();

    @Override
    List<G_Server> selectsByKey(G_Server g_server);

    @Override
    G_Server selectById(Integer id);

    @Override
    Integer insert(G_Server g_server);

    @Override
    Integer update(G_Server g_server);

    @Override
    Integer delete(G_Server g_server);
}
