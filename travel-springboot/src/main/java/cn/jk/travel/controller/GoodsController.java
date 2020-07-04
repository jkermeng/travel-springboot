package cn.jk.travel.controller;

import cn.jk.travel.entity.*;
import cn.jk.travel.entity.util.Goods_Total;
import cn.jk.travel.enums.Enums;
import cn.jk.travel.enums.Result;
import cn.jk.travel.server.imp.GoodsServI;
import cn.jk.travel.server.imp.UserServI;
import cn.jk.travel.util.PictureUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("goods")
public class GoodsController {
    @Autowired
    private GoodsServI goodsServI;
    @Autowired
    private PictureUpload pictureUpload;
    @Autowired
    private UserServI userServI;

    @GetMapping("showAll")
    private Result showAll() {
        List<Goods> goods = goodsServI.showAll();

        return new Result(Enums.Success, goods);
    }

    @GetMapping("datails")
    private Result showDetails(Integer id) {
        Goods goods = goodsServI.showDetails(id);
        return new Result(Enums.Success, goods);
    }

    @PostMapping("add")
    private Result addGoods(Goods goods, @RequestParam("file") MultipartFile files[]) throws IOException {
        System.out.println(goods);
        Goods integer = goodsServI.addGoods(goods);
        if (null != integer.getTg_id()) {
            if (null != files && files.length >= 1) {
                for (MultipartFile file : files
                ) {
                    System.out.println("文件名称" + file.getOriginalFilename());
                    String substring = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf("."));
                    if (substring.equals(".jpg") || substring.equals(".png")) {
                        String fileName = "img/goods/img/" + UUID.randomUUID().toString() + substring;
                        //添加入photo数据库
                        TG_Img tg_img = new TG_Img();
                        tg_img.setTg_id(integer.getTg_id());
                        tg_img.setTtgi_url(fileName);
                        goodsServI.addGoodsImg(tg_img);
                        String uuid = "/" + fileName;
                        pictureUpload.uploadPicture(uuid, file.getInputStream());
                    } else {
                        return new Result(Enums.Fail, "上传文件类型错误！");
                    }
                }
                return new Result(Enums.Success, "上传成功！");
            }
            return new Result(Enums.Success, "添加成功");
        } else {
            return new Result(Enums.Success, "添加失败");
        }

    }

    @GetMapping("showGoodsByShopper")
    private Result showGoodsByShopper(Integer id) {
        List<Goods> goods = goodsServI.showGoodsByShopperId(id);
        return new Result(Enums.Success, goods);
    }

    @GetMapping("showOneGoods")
    private Result showOneGoods(Integer id) {
        Goods goods = goodsServI.showOneGoods(id);
        return new Result(Enums.Success, goods);
    }

    @PostMapping("addGoodsImg")
    private Result addGoodsImg(TG_Img tg_img, MultipartFile file) throws IOException {
        if (file.getSize() != 0) {
            System.out.println("文件名称" + file.getOriginalFilename());
            String substring = file.getOriginalFilename().substring(file.getOriginalFilename().indexOf("."));
            if (substring.equals(".jpg") || substring.equals(".png")) {
                String fileName = "img/goods/img/" + UUID.randomUUID().toString() + substring;
                //添加入photo数据库
                tg_img.setTtgi_url(fileName);
                String uuid = "/" + fileName;
                pictureUpload.uploadPicture(uuid, file.getInputStream());
                Integer integer = goodsServI.addGoodsImg(tg_img);
                return integer > 0 ? new Result(Enums.Success, "添加图片成功") : new Result(Enums.Fail, "添加图片失败");
            } else {
                return new Result(Enums.Fail, "上传文件错误");
            }
        } else {
            return new Result(Enums.Fail, "没有上传如何文件");
        }
    }

    @GetMapping("delGoodsImg")
    private Result delGoodsImg(Integer id, String name) {
        pictureUpload.delPicture(name);
        Integer integer = goodsServI.delGoodsImg(id);
        if (integer > 0) {
            return new Result(Enums.Success, "删除文件成功");
        } else {
            return new Result(Enums.Fail, "删除文件失败");
        }
    }

    @GetMapping("updateGoods")
    private Result updateGoods(Goods goods) {
        System.out.println("xxxxxxxxxxx" + goods);
        Integer integer = goodsServI.updateGoods(goods);
        if (integer > 0) {
            return new Result(Enums.Success, "更新商品成功");
        } else {
            return new Result(Enums.Fail, "更新商品失败");
        }
    }

    @GetMapping("addGoodsServer")
    private Result addGoodsServer(G_Server g_server) {
        Integer integer = goodsServI.addGoodsServer(g_server);
        if (integer > 0) {
            return new Result(Enums.Success, "添加商品服务成功");
        } else {
            return new Result(Enums.Fail, "添加商品服务失败");
        }
    }

    @GetMapping("updateGoodsServer")
    private Result updateGoodsServer(G_Server g_server) {
        Integer integer = goodsServI.updateGoodsServer(g_server);
        if (integer > 0) {
            return new Result(Enums.Success, "更新商品服务成功");
        } else {
            return new Result(Enums.Fail, "更新商品服务失败");
        }
    }

    @GetMapping("showOrderByShopper")
    private Result showOrderByShopper(Integer id) {
        System.out.println(id);
        List<G_Order> g_orders = goodsServI.showGOrderByShopper(id);
        return new Result(Enums.Success, g_orders);

    }

    @GetMapping("updateOrderByShopper")
    private Result updateOrderByShopper(G_Order g_order) {
        Integer integer = goodsServI.updateOrderByShopper(g_order);
        if (integer > 0) {
            return new Result(Enums.Success, "更新订单状态成功");
        } else {
            return new Result(Enums.Fail, "更新订单状态失败");
        }
    }

    @GetMapping("showSaleChart")
    private Result showSaleChart(Integer id) {
        List<Goods_Total> goods_totals = goodsServI.showShopperChart(id);
        return new Result(Enums.Success, goods_totals);
    }
}
