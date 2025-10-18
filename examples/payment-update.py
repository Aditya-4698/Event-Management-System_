#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="payment")
cur=con.cursor()

f=cgi.FieldStorage()
v=f.getvalue('t')
try:
	if v=='update':
		PId=(f.getvalue("PId"))
		EId=(f.getvalue("EId"))
		custname=(f.getvalue("custname"))
		amt=(f.getvalue("amt"))
		Damt=(f.getvalue("Damt"))
		mode=(f.getvalue("mode"))
		Status=(f.getvalue("Status"))
		Tdate=(f.getvalue("Tdate"))
		balance=(f.getvalue("balance"))

		url="update paymentadd set payment_id=\'"+str(PId)+"\',event_id=\'"+str(EId)+"\',customer_name=\'"+str(custname)+"\',paid_amount=\'"+str(amt)+"\',dues_amount=\'"+str(Damt)+"\',pay_mode=\'"+str(mode)+"\',payment_status=\'"+str(Status)+"\',transaction_date=\'"+str(Tdate)+"\',balance=\'"+str(balance)+"\' where payment_id=\'"+str(PId)+"\'"
		cur.execute(url)
		con.commit()
		print("Record updated successfully")
	else:
		url="delete from paymentadd where payment_id=\'"+f.getvalue('t1')+"\'"
		cur.execute(url)
		con.commit()
		print("Record Successfully deleted")
except Exception as e:
	print("Error:",e)