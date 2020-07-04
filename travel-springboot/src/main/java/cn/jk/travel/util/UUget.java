package cn.jk.travel.util;

import java.util.UUID;

public class UUget {
    public static String getUUID(){
        String uuid = "";
        String[] split = UUID.randomUUID().toString().split("-");
        for (String id : split
        ) {
            uuid += id;
        }
        return uuid;
    }
}
