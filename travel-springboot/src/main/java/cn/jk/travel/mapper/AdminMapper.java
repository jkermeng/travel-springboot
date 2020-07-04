package cn.jk.travel.mapper;

import cn.jk.travel.entity.Admin;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface AdminMapper extends Dao<Admin> {
    @Override
    List<Admin> selectAll();

    @Override
    Integer deleteByList(List list);

    @Override
    List<Admin> selectsByKey(Admin admin);

    @Override
    Admin selectOneByKey(Admin admin);

    @Override
    Admin selectById(Integer id);

    @Override
    Integer update(Admin admin);

    @Override
    Integer delete(Admin admin);

    @Override
    Integer insert(Admin admin);


}
