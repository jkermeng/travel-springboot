package cn.jk.travel.server.imp;

import cn.jk.travel.entity.Scenery;

import java.util.List;

public interface SceneryServI {
    List<Scenery> showAll();
    Integer addScenery(Scenery scenery);
    Integer delScenery(Integer ts_id);
}
