package cn.jk.travel.server;

import cn.jk.travel.entity.Scenery;
import cn.jk.travel.mapper.SceneryMapper;
import cn.jk.travel.server.imp.SceneryServI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SceneryServImp implements SceneryServI {
    @Autowired
    private SceneryMapper sceneryMapper;
    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public List<Scenery> showAll() {
        return sceneryMapper.selectAll();
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer addScenery(Scenery scenery) {
        return sceneryMapper.insert(scenery);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer delScenery(Integer ts_id) {
        return sceneryMapper.delete(new Scenery(ts_id));
    }
}
