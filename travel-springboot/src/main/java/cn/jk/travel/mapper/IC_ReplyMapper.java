package cn.jk.travel.mapper;

import cn.jk.travel.entity.IC_Reply;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IC_ReplyMapper extends Dao<IC_Reply> {
    @Override
    List<IC_Reply> selectAll();

    @Override
    List<IC_Reply> selectsByKey(IC_Reply ic_reply);

    @Override
    Integer delete(IC_Reply ic_reply);

    @Override
    Integer insert(IC_Reply ic_reply);

    Integer delReplyByFirstId(Integer id);
}
