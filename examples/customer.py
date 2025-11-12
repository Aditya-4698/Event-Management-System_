#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="customer")
cur=con.cursor()

f=cgi.FieldStorage() 
url="insert into customeradd(customer_id,customer_name,contact,alternate_contact,district,state,pincode,address,addhar_no,addhar) values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
try:
    print(f.getvalue("CId"))
    print(f.getvalue("custname"))
    print(f.getvalue("contact"))
    print(f.getvalue("alt_cont"))
    print(f.getvalue("dist"))
    print(f.getvalue("state"))
    print(f.getvalue("pincode"))
    print(f.getvalue("address"))
    print(f.getvalue("adhar"))  
    print(f.getvalue("gallery"))
    cur.execute(url,(f.getvalue("CId"),f.getvalue("custname"),f.getvalue("contact"),f.getvalue("alt_cont"),f.getvalue("dist"),f.getvalue("state"),f.getvalue("pincode"),f.getvalue("address"),f.getvalue("adhar"),f.getvalue("gallery")))
    con.commit()
    print("Record inserted")
except Exception as e:
    print("Error:",e)