/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DecimalFormat;
import java.util.Random;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet(urlPatterns = {"/servlet"})
public class Servlet extends HttpServlet {
    
    public Connection conn;
    public final String url="jdbc:mysql://edjo.usask.ca:3306/cmpt350_jd";
    public final String user="cmpt350_jd";
    public final String password="7jksf72834jk";
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        HttpSession session = request.getSession(true);
        int status = Integer.parseInt(request.getParameter("status"));
        /*
         * Status code:
         * 0 = Get Items
         * 1 = Insert item
         */
        if (0 == status) {
           PrintWriter out = response.getWriter();
           try{
               
              int mainCategory = Integer.parseInt(request.getParameter("mainCat"));
              int subCategory = Integer.parseInt(request.getParameter("subCat"));
              getItems(request, response, session,mainCategory,subCategory );
           }
           catch(Exception e){
               out.println(e.toString());
           }
            //getAllBook(request, response);
        } else if (1 == status) {
            
            String title= request.getParameter("title").toString();
            float price = Float.parseFloat(request.getParameter("price"));
            String description = request.getParameter("desc").toString();
            int mainCategory = Integer.parseInt(request.getParameter("mainCat"));
            int subCategory = Integer.parseInt(request.getParameter("subCat"));
            insertItem(title,price,description,mainCategory,subCategory); 
            outputResult(request, response, session);
            
        } else {
           outputResult(request, response, session);
        }
        
        
    }
    
    protected void outputResult(HttpServletRequest request, HttpServletResponse response, HttpSession session)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("test");

    }
    
    public void getConnection()
    {
        try {
            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            conn = DriverManager.getConnection(url,user,password);
            
        }
        catch(Exception e){
            System.out.println(e.toString());
        }
    }
    
   protected void  insertItem(String title, float price, String description, int mainCategory, int subCategory ){
        try{
            this.getConnection();
            String main=Integer.toString(mainCategory);
            String sub=Integer.toString(subCategory);
            final String query = "INSERT INTO Items(ItemId,Title,Description,Price,MainCategory,SubCategory) "
                    + "VALUES ( ? , ? , ? , ? , ? , ? )";
            final PreparedStatement ps = this.conn.prepareStatement(query);
            Random rand = new Random();
            int itemID=rand.nextInt(100);
            ps.setInt(1, itemID);
            ps.setString(2, title);
            ps.setString(3, description);
            ps.setFloat(4, price);
            ps.setString(5,main);
            ps.setString(6, sub);
            ps.executeUpdate();
        }catch (SQLException e){
            System.out.println(e.toString());
        }
    }
   
   protected void getItems(HttpServletRequest request, HttpServletResponse response, HttpSession session, int main, int sub)
            throws ServletException, IOException, SQLException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        this.getConnection();
        String mainCategory=Integer.toString(main);
        String subCategory=Integer.toString(sub);
        final String query = "SELECT * FROM Items WHERE MainCategory=? and SubCategory=?";
        final PreparedStatement ps = this.conn.prepareStatement(query);
        ps.setString(1, mainCategory);
        ps.setString(2, subCategory);
        ps.executeQuery();
        ResultSet rs = ps.getResultSet();
       //<table data-role="table" id="movie-table-custom" data-mode="reflow" class="movie-list ui-responsive">
/*
        out.println("<table data-role=\"table\" id=\"movie-table-custom\" data-mode=\"reflow\" class=\"movie-list ui-responsive\">");
        out.println("<thead>");
        out.println("<tr>");
        out.println("<th data-priority=\"1\">Title</th>");
        out.println("<th data-priority=\"2\">Description</th>");
        out.println("</tr>");
        out.println("</thead>");
        out.println("<tbody>");
        while(rs.next()){
            out.println("<tr>");
            out.println("<td>");
            out.println(rs.getString("Title"));
            out.println("</td>");
            out.println("<td>");
            out.println(rs.getString("Description"));
            out.println("</td>");
            out.println("</tr>");
        }
        out.println("</tbody>");
        out.println("</table>");
         */
        
        out.println("<table border=1>");
        out.println("<tr>");
        out.println("<td>");
        out.println("<h3>Title</h3>");
        out.println("</td>");
        out.println("<td>");
        out.println("<h3>Description</h3>");
        out.println("</td>");
        while(rs.next()){
            out.println("<tr>");
            out.println("<td>");
            out.println(rs.getString("Title"));
            out.println("</td>");
            out.println("<td>");
            out.println(rs.getString("Description"));
            out.println("</td>");
            out.println("</tr>");
        }
        out.println("</table>");
       
        
        
        
    }
    
// <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
    
    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
    
    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
    
}
