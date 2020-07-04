package cn.jk.travel.mapper;

import cn.jk.travel.entity.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface UserMapper extends Dao<User> {
    @Override
    List<User> selectAll();

    @Override
    User selectOneByKey(User user);

    List<User> selectByKey(User user);

    @Override
    User selectById(Integer id);

    List<User> selectsById(Integer id);

    @Override
    Integer update(User user);

    @Override
    Integer delete(User user);

    @Override
    Integer deleteByList(List list);

    @Override
    Integer insert(User user);

    Integer regist(User user);

    @Override
    List<User> selectsByKey(User user);
}
