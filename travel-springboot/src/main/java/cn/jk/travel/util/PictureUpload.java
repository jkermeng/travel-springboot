package cn.jk.travel.util;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;

@Component
public class PictureUpload {


    public Boolean uploadPicture(String name, InputStream inputStream) throws FileNotFoundException {
        delPicture(name);
        String path = ResourceUtils.getURL("classpath:").getPath();
//        File file = new File(path+"/static" +name);
        File file = new File("C:\\Users\\JKERmeng\\statics" + name);
//        File file = new File("/" + path.substring(1, path.indexOf("/WEB-INF/classes")) + name);
        System.out.println("看看路径到哪里了"+file.getAbsolutePath());
        try {
            FileOutputStream fos = new FileOutputStream(file);
            IOUtils.copy(inputStream, fos);
            IOUtils.closeQuietly(fos);
            IOUtils.closeQuietly(inputStream);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return true;
    }
    public void delPicture(String name){
        System.out.println("路径查看" + name);
        String path = null;
        try {
            path = ResourceUtils.getURL("classpath:").getPath();
            File file = new File(path+"/static" + name);
            if (file.exists()) {
                file.delete();
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
    public void downLoad(String fileName,HttpServletRequest request, HttpServletResponse response){

        //根据实际业务进行修改。
        System.out.println(fileName);
        try {
            String pathTrue = ResourceUtils.getURL("classpath:").getPath();
            //这里是下载以后的文件叫做什么名字。我这里是以时间来定义名字的。
            downCfg(UUget.getUUID()+".jpg", request, response);
            OutputStream out;
            FileInputStream inputStream = new FileInputStream(pathTrue+"/static" + fileName);
            out = response.getOutputStream();
            byte[] buffer = new byte[1024];
            int len;
            while ((len = inputStream.read(buffer)) != -1) {
                out.write(buffer, 0, len);
            }

            inputStream.close();

            out.close();

            out.flush();

        } catch (IOException e) {

            e.printStackTrace();
        }

    }

    private void downCfg(String fileName, HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException {
        String userAgent = request.getHeader("User-Agent");
        if (userAgent.contains("MSIE") || userAgent.contains("Trident")) {
            fileName = URLEncoder.encode(fileName, "UTF-8");
        } else {
            fileName = new String(fileName.getBytes("UTF-8"), "ISO-8859-1");
        }
        response.setHeader("Content-disposition", String.format("attachment; filename=\"%s\"", fileName));
        response.setContentType("application/octet-stream;charset=utf-8");
        response.setCharacterEncoding("UTF-8");
    }

}
