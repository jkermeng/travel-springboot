package cn.jk.travel.mapper;

import java.util.List;
import java.util.Set;

public interface Dao<T> {
    List<T> selectAll();

    T selectOneByKey(T t);

    List<T> selectsByKey(T t);

    T selectById(Integer id);

    Integer update(T t);

    Integer delete(T t);

    Integer deleteByList(List list);

    Integer insert(T t);


}
