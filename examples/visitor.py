#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
# import MySQLdb
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="visitor")
# print(con)
cur=con.cursor()


f=cgi.FieldStorage()

url="insert into visitoradd(visitor_id,visitor_name,address,state,district,pincode,contact,alternate_contact,purpose) values(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
try:
    print(f.getvalue("VistId"))
    print(f.getvalue("vistname"))
    print(f.getvalue("address"))
    print(f.getvalue("state"))
    print(f.getvalue("dist"))
    print(f.getvalue("pincode"))    
    print(f.getvalue("contact"))
    print(f.getvalue("alt_cont"))
    print(f.getvalue("description"))
    cur.execute(url,(f.getvalue("VistId"),f.getvalue("vistname"),f.getvalue("address"),f.getvalue("state"),f.getvalue("dist"),f.getvalue("pincode"),f.getvalue("contact"),f.getvalue("alt_cont"),f.getvalue("description")))
    con.commit()
    print("Record inserted")
except Exception as e:
    print("Error:",e)