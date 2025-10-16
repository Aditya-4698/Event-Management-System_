#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="category")
cur=con.cursor()

f=cgi.FieldStorage() 

a=f.getvalue("catid")
b=f.getvalue("categname")   
c=f.getvalue("date")
d=f.getvalue("description")
print(a)
print(b)
print(c)
print(d)
try:
    url="update categoryadd set category_id= \'"+str(a)+"\',category_name=\'"+str(b)+"\',date=\'"+str(c)+"\',description=\'"+str(d)+"\' where category_id=\'"+str(a)+"\';"

    cur.execute(url)
    con.commit()
    # print(url)
except Exception as e:
    print("Error:",e)

