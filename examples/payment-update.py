#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="payment")
cur=con.cursor()

f=cgi.FieldStorage()
# url="insert into paymentadd(payment_id,event_id,customer_name,paid_amount,dues_amount,pay_mode,payment_status,transaction_date,balance) values(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
# try:
#     print(f.getvalue("PId"))
#     print(f.getvalue("EId"))
#     print(f.getvalue("custname"))
#     print(f.getvalue("amt"))
#     print(f.getvalue("Damt"))
#     print(f.getvalue("mode"))
#     print(f.getvalue("Status"))
#     print(f.getvalue("Tdate"))  
#     print(f.getvalue("balance"))
#     cur.execute(url,(f.getvalue("PId"),f.getvalue("EId"),f.getvalue("custname"),f.getvalue("amt"),f.getvalue("Damt"),f.getvalue("mode"),f.getvalue("Status"),f.getvalue("Tdate"),f.getvalue("balance")))
#     con.commit()
#     print("Record inserted")
# except Exception as e:
#     print("Error:",e)
PId=(f.getvalue("PId"))
EId=(f.getvalue("EId"))
custname=(f.getvalue("custname"))
amt=(f.getvalue("amt"))
Damt=(f.getvalue("Damt"))
mode=(f.getvalue("mode"))
Status=(f.getvalue("Status"))
Tdate=(f.getvalue("Tdate"))
balance=(f.getvalue("balance"))
try:
	url="update paymentadd set payment_id=\'"+str(PId)+"\',event_id=\'"+str(EId)+"\',customer_name=\'"+str(custname)+"\',paid_amount=\'"+str(amt)+"\',dues_amount=\'"+str(Damt)+"\',pay_mode=\'"+str(mode)+"\',payment_status=\'"+str(Status)+"\',transaction_date=\'"+str(Tdate)+"\',balance=\'"+str(balance)+"\' where payment_id=\'"+str(PId)+"\'"
	cur.execute(url)
	con.commit()
	print("Record updated successfully")
except Exception as e:
	print("Error:",e)