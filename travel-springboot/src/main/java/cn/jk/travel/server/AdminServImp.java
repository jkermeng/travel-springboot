package cn.jk.travel.server;

import cn.jk.travel.entity.Admin;
import cn.jk.travel.entity.IC_Reply;
import cn.jk.travel.entity.Information_Comment;
import cn.jk.travel.entity.User;
import cn.jk.travel.mapper.AdminMapper;
import cn.jk.travel.mapper.IC_ReplyMapper;
import cn.jk.travel.mapper.Information_CommentMapper;
import cn.jk.travel.mapper.UserMapper;
import cn.jk.travel.server.imp.AdminServI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class AdminServImp implements AdminServI {
    @Autowired
    private AdminMapper adminMapper;
    @Autowired
    private Information_CommentMapper information_commentMapper;
    @Autowired
    private IC_ReplyMapper ic_replyMapper;
    @Autowired
    private UserMapper userMapper;

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public List<Admin> showAll() {
        return adminMapper.selectAll();
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public Admin Login(Admin admin) {
        Admin admin1 = adminMapper.selectOneByKey(admin);
        System.out.println(admin1);
        if (null != admin1 && admin1.getId() != null && admin1.getId() != 0) {
            return admin1;
        } else {
            return null;
        }
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer add(Admin admin) {
        return adminMapper.insert(admin);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer delComment(Integer tic_id) {
        ic_replyMapper.delReplyByFirstId(tic_id);
        return information_commentMapper.delete(new Information_Comment(tic_id));
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer delReply(Integer ticr_id) throws Exception {
        HashSet<IC_Reply> list = new HashSet<>();
        List<IC_Reply> ic_replies = ic_replyMapper.selectAll();
        int index = 0;
        int index2 = 0;
        for (int i = 0; i < ic_replies.size(); i++) {
            if (ticr_id == ic_replies.get(i).getTicr_id()) {
                if (null != ic_replies.get(i).getTicr_customer_replyId()) {
                    index2 = ic_replies.get(i).getTicr_customer_replyId();
                    list.add(ic_replies.get(i));
                } else {
                    index = ic_replies.get(i).getTicr_id();
                    list.add(ic_replies.get(i));
                }
                for (int j = 0; j < ic_replies.size(); j++) {
                    if (null != ic_replies.get(j).getTicr_customer_replyId() && index2 == ic_replies.get(j).getTicr_customer_replyId()) {
                        index = ic_replies.get(j).getTicr_id();
                        System.out.println(ic_replies.get(j).getTicr_id());
                        list.add(ic_replies.get(j));
                        for (int k = 0; k < ic_replies.size(); k++) {
                            if (null != ic_replies.get(k).getTicr_customer_replyId() && index == ic_replies.get(k).getTicr_customer_replyId()) {
                                list.add(ic_replies.get(k));
                            }
                        }
                    } else if (null != ic_replies.get(j).getTicr_customer_replyId() && index == ic_replies.get(j).getTicr_customer_replyId()) {
                        index2 = ic_replies.get(j).getTicr_id();
                        System.out.println(ic_replies.get(j).getTicr_id());
                        list.add(ic_replies.get(j));
                        for (int k = 0; k < ic_replies.size(); k++) {
                            if (null != ic_replies.get(k).getTicr_customer_replyId() && index2 == ic_replies.get(k).getTicr_customer_replyId()) {
                                list.add(ic_replies.get(k));
                            }
                        }
                    }
                }

            }
        }
        int flag = 1;
        for (IC_Reply irc : list
        ) {
            Integer delete = ic_replyMapper.delete(new IC_Reply(irc.getTicr_id()));
            if (delete == 0) {
                throw new Exception("报错把啊哈哈哈哈");
            }
        }
        return flag;
    }


}
