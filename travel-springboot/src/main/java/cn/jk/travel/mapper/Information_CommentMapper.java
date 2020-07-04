package cn.jk.travel.mapper;

import cn.jk.travel.entity.Information_Comment;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Information_CommentMapper extends Dao<Information_Comment> {
    @Override
    List<Information_Comment> selectAll();

    @Override
    List<Information_Comment> selectsByKey(Information_Comment information_comment);

    @Override
    Information_Comment selectById(Integer id);

    @Override
    Integer insert(Information_Comment information_comment);

    @Override
    Integer delete(Information_Comment information_comment);
}
