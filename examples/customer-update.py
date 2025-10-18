#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="customer")
cur=con.cursor()

f=cgi.FieldStorage() 
v=f.getvalue('t')
try:
    if v=='update':
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

        url="update customeradd set customer_id= \'"+str(CId)+"\',customer_name=\'"+str(Cname)+"\',contact=\'"+str(Contact)+"\',alternate_contact=\'"+str(Altcont)+"\',district=\'"+str(Dist)+"\',state=\'"+str(State)+"\',pincode=\'"+str(Pincode)+"\',address=\'"+str(Address)+"\',addhar_no=\'"+str(Adhar)+"\',addhar=\'"+str(Adharpic)+"\' where customer_id=\'"+str(CId)+"\';"
        cur.execute(url)
        con.commit()
        # print("1")
        # print(url)   
    else:
        url="delete from customeradd where customer_id=\'"+f.getvalue('t1')+"\'"
        cur.execute(url)
        con.commit()
        print("Record Successfully Deleted") 
except Exception as e:
    print("Error:",e)