package cn.jk.travel.server;

import cn.jk.travel.entity.*;
import cn.jk.travel.mapper.*;
import cn.jk.travel.server.imp.InformationServI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class InformationServImp implements InformationServI {
    @Autowired
    private InformationMapper informationMapper;
    @Autowired
    private TI_ImgMapper ti_imgMapper;
    @Autowired
    private Information_CommentMapper information_commentMapper;
    @Autowired
    private IC_ReplyMapper ic_replyMapper;
    @Autowired
    private UserMapper userMapper;

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public List<Information> showAllInformation() {
        List<Information> information = informationMapper.selectAll();
        for (Information inf : information
        ) {
            List<TI_Img> ti_imgs = ti_imgMapper.selectsByKey(new TI_Img(inf.getTi_id()));
            if (ti_imgs.size() > 0) {
                inf.setTi_img(ti_imgs.get(0));
            }
        }
        return information;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public Information showDetailsInformation(Integer ti_id) {
        Information information = informationMapper.selectById(ti_id);
        Information_Comment information_comment = new Information_Comment();
        information_comment.setTi_id(ti_id);
        List<Information_Comment> information_comments = information_commentMapper.selectsByKey(information_comment);
        for (Information_Comment ic : information_comments
        ) {
            User user = userMapper.selectById(ic.getTu_id());
            ic.setUser(user);
            IC_Reply ic_reply = new IC_Reply();
            ic_reply.setTic_id(ic.getTic_id());
            List<IC_Reply> ic_replies = ic_replyMapper.selectsByKey(ic_reply);
            ArrayList<IC_Reply> ic_replies2 = new ArrayList<>();
            if (ic_replies.size() != 0) {
                for (IC_Reply icr : ic_replies
                ) {
                    if (null == icr.getTicr_customer_replyId()) {
                        ArrayList<IC_Reply> ic_replies1 = new ArrayList<>();
                        for (IC_Reply icr2 : ic_replies
                        ) {
                            ArrayList<IC_Reply> ic_replies3 = new ArrayList<>();
                            if(icr2.getTicr_customer_replyId()==icr.getTicr_id()){
                                for (IC_Reply icr3:ic_replies
                                ) {
                                    if (null!=icr3.getTicr_customer_replyId()&&icr2.getTicr_id()==icr3.getTicr_customer_replyId()){
                                        ic_replies3.add(icr3);
                                        icr2.setReplyList(ic_replies3);
                                    }
                                }
                                ic_replies1.add(icr2);
                            }else {
                                for (IC_Reply icr3:ic_replies
                                ) {
                                    if (null!=icr3.getTicr_customer_replyId()&&icr2.getTicr_id()==icr3.getTicr_customer_replyId()){
                                        ic_replies3.add(icr3);
                                        icr2.setReplyList(ic_replies3);
                                    }
                                }
                            }
                        }
                        icr.setReplyList(ic_replies1);
                        ic_replies2.add(icr);
                    }
                }
                ic.setIc_replyList(ic_replies2);
            }
        }
        information.setCommentList(information_comments);
        List<TI_Img> ti_imgs = ti_imgMapper.selectsByKey(new TI_Img(ti_id));
        information.setImgList(ti_imgs);
        return information;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer delInformation(Integer ti_id) {
        return null;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer addInformation(Information information) {
        information.setTi_createTime(new Date());
        return informationMapper.insert(information);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer addInfoImg(TI_Img ti_img) {
        return ti_imgMapper.insert(ti_img);
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
    public Integer addComments(Information_Comment information_comment) {
        information_comment.setTic_createTime(new Date());
        return information_commentMapper.insert(information_comment);
    }
}
