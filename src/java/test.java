/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/

import java.io.IOException;
import java.io.PrintWriter;
import java.text.DecimalFormat;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.sql.*;
import java.util.*;


@WebServlet(urlPatterns = {"/test"})
public class test extends HttpServlet {
    /*
        Status codes 
        0 = read from Items table
        1 = Insert Item
        
    */
    public Connection conn;
    public final String url="jdbc:mysql://edjo.usask.ca:3306/cmpt350_jd";
    public final String user="cmpt350_jd";
    public final String password="7jksf72834jk";
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        HttpSession session = request.getSession(true);
        //INSERT INTO Users (Username, Password, FirstName, Lastname, Age, Address, City, Prov, Postal, Phone) VALUES ('dt', 'dt', 'david', 'thai', 0, 'ok', 'sask', 'sk', 'sk', 'phone');
        int status = Integer.parseInt(request.getParameter("status"));
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
            
            
        } else {
           
        }
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
            ps.setFloat(2, price);
            ps.setString(3, description);
            ps.setString(4,main);
            ps.setString(5, sub);
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
    protected void InsertIntoDB(String username, String password){
        try{
            
            this.getConnection();
            final String query = "INSERT INTO Users(Username,Password) VALUES ( ? , ? )";
            final PreparedStatement ps = this.conn.prepareStatement(query);
            ps.setString(1, username);
            ps.setString(2, password);
            ps.executeUpdate();
        }
        catch(SQLException error){
            System.out.println(error.toString());
        }
    }
    
    protected void outputResult(HttpServletRequest request, HttpServletResponse response, HttpSession session)
            throws ServletException, IOException, SQLException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
       
        this.getConnection();
        final String query = "SELECT * FROM  Users";
        final PreparedStatement ps = this.conn.prepareStatement(query);
        ps.executeQuery();
        ResultSet rs = ps.getResultSet();
        out.println("<table border=1>");
        out.println("<tr>");
        out.println("<td>");
        out.println("<h3>Username</h3>");
        out.println("</td>");
        out.println("<td>");
        out.println("<h3>Password</h3>");
        out.println("</td>");
        while(rs.next()){
            out.println("<tr>");
            out.println("<td>");
            out.println(rs.getString("Username"));
            out.println("</td>");
            out.println("<td>");
            out.println(rs.getString("Password"));
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
    public static void main(){
        
    }
}
