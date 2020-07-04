package cn.jk.travel;

import cn.hutool.core.date.DateUtil;
import cn.jk.travel.entity.Goods;
import cn.jk.travel.entity.User;
import cn.jk.travel.mapper.GoodsMapper;
import cn.jk.travel.server.imp.UserServI;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.ResourceUtils;

import java.io.FileNotFoundException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@SpringBootTest
class TravelApplicationTests {
    @Autowired
    private UserServI userServI;
    @Autowired
    private GoodsMapper goodsMapper;
    @Test
    void contextLoads() throws  FileNotFoundException {
        String path2 = "/C:/Users/JKERmeng/travel-0.0.1-SNAPSHOT.jar!/BOOT-INF/classes!/";
    String path = this.getClass().getProtectionDomain().getCodeSource().getLocation().getPath();

        System.out.println(path);

    }

}
