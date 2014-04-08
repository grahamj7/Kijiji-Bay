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
    
    public void processRequest(HttpServletRequest request, HttpServletResponse response)
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
    
    public void outputResult(HttpServletRequest request, HttpServletResponse response, HttpSession session)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("test");

    }
    
    protected void getConnection()
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
    public void closeConnection()
    {
        try{
           this.conn.close();
        }
        catch(SQLException e)
        {
            System.out.println(e.toString());
        }
    }
   protected int getMaxItemID()throws SQLException{
       
       this.getConnection();
       final String query = "SELECT MAX(ItemId) FROM Items";
       final PreparedStatement ps = this.conn.prepareStatement(query);
       final ResultSet result = ps.executeQuery();
       
       if(result.next()){
           final int itemID = result.getInt(1);
           this.closeConnection();
           return itemID;
       }
       else if(!result.next()){
           this.closeConnection();
           return 0;
       }
       else{
           this.closeConnection();
           throw new SQLException();
       }
	
   }
   public void  insertItem(String title, float price, String description, int mainCategory, int subCategory ){
        try{
            this.getConnection();
            String main=Integer.toString(mainCategory);
            String sub=Integer.toString(subCategory);
            final String query = "INSERT INTO Items(ItemId,Title,Description,Price,MainCategory,SubCategory) "
                    + "VALUES ( ? , ? , ? , ? , ? , ? )";
            final PreparedStatement ps = this.conn.prepareStatement(query);
            int itemID=getMaxItemID()+1;
            ps.setInt(1, itemID);
            ps.setString(2, title);
            ps.setString(3, description);
            ps.setFloat(4, price);
            ps.setString(5,main);
            ps.setString(6, sub);
            ps.executeUpdate();
            this.closeConnection();
        }catch (SQLException e){
            System.out.println(e.toString());
        }
    }
   
   public void getItems(HttpServletRequest request, HttpServletResponse response, HttpSession session, int main, int sub)
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
   
   public void insertUser(String username, String password, String fname, String lname, String email, int age, String phone, String address, String city, String prov, String postal){
       try{
            this.getConnection();
            final String query = "INSERT INTO Users (Username, Password, Firstname, Lastname, Email, Age, Phonenumber, Address, City, Province, PostalCode) "
                    + "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            final PreparedStatement ps = this.conn.prepareStatement(query);
            ps.setString(1, username);
            ps.setString(2, password);
            ps.setString(3, fname);
            ps.setString(4, lname);
            ps.setString(5, email);
            ps.setInt(6,age);
            ps.setString(7, phone);
            ps.setString(8, address);
            ps.setString(9, city);
            ps.setString(10, prov);
            ps.setString(11, postal);     
            ps.executeUpdate();
            this.closeConnection();
        }catch (SQLException e){
            System.out.println(e.toString());
        }
   }
   
   public void updateUserInfo(String username, String password, String fname, String lname, String email, int age, String phone, String address, String city, String prov, String postal){
       
       try{
           this.getConnection();
           final String query = "UPDATE Users SET Password = ?, Firstname = ?, Lastname = ?, Email = ?, Age = ?, Phonenumber = ?, Address = ?, City = ?, Province = ?, PostalCode = ? WHERE Username = ?";
           final PreparedStatement ps = this.conn.prepareStatement(query);
 
           ps.setString(1, password);
           ps.setString(2, fname);
           ps.setString(3, lname);
           ps.setString(4, email);
           ps.setInt(5,age);
           ps.setString(6, phone);
           ps.setString(7, address);
           ps.setString(8, city);
           ps.setString(9, prov);
           ps.setString(10, postal);
           ps.setString(11, username);
           ps.executeUpdate();
           this.closeConnection();
       }catch (SQLException e){
           System.out.println(e.toString());
       }
   } 
   public boolean checkIfUserExists(String username){
       try{
           this.getConnection();
           final String query = "SELECT count(*) FROM Users WHERE username = ?";
           final PreparedStatement ps = this.conn.prepareStatement(query);
           ps.setString(1, username);
           final ResultSet result = ps.executeQuery();
           
           /*
           * If there is anything in the result, user must exist
           */
           if(result.next()){
               final int count = result.getInt(1);
               if(count == 1){
                   return true;
               }
               else{
                   return false;
               }
           }
           this.closeConnection();
           return false;
       }catch (SQLException e){
           System.out.println(e.toString());
       }
       return false;
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
