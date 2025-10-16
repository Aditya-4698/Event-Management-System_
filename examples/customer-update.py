#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="customer")
cur=con.cursor()

f=cgi.FieldStorage() 

CId=f.getvalue("CId")
Cname=f.getvalue("custname")
Contact=f.getvalue("contact")
Altcont=f.getvalue("alt_cont")
Dist=f.getvalue("district")
State=f.getvalue("state")
Pincode=f.getvalue("pincode")
Address=f.getvalue("address")
Adhar=f.getvalue("adhar")
Adharpic=f.getvalue("gallery")
print(CId)
print(Cname)
print(Contact)
print(Altcont)
print(Dist)
print(State)
print(Pincode)
print(Address)
print(Adhar)
print(Adharpic)
try:
    url="update customeradd set customer_id= \'"+str(CId)+"\',customer_name=\'"+str(Cname)+"\',contact=\'"+str(Contact)+"\',alternate_contact=\'"+str(Altcont)+"\',district=\'"+str(Dist)+"\',state=\'"+str(State)+"\',pincode=\'"+str(Pincode)+"\',address=\'"+str(Address)+"\',addhar_no=\'"+str(Adhar)+"\',addhar=\'"+str(Adharpic)+"\' where customer_id=\'"+str(CId)+"\';"
    cur.execute(url)
    con.commit()
    # print("1")
    # print(url)    
except Exception as e:
    print("Error:",e)