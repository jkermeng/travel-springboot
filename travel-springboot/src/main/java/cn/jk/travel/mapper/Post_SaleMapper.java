package cn.jk.travel.mapper;

import cn.jk.travel.entity.Post_Sale;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Post_SaleMapper extends Dao<Post_Sale> {
    @Override
    List<Post_Sale> selectAll();

    @Override
    List<Post_Sale> selectsByKey(Post_Sale post_sale);

    @Override
    Integer insert(Post_Sale post_sale);

    @Override
    Post_Sale selectById(Integer id);
}
