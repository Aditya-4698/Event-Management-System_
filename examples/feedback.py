#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
f=cgi.FieldStorage()
print(f.getvalue("SId" ))
print(f.getvalue("EId"))
print(f.getvalue("CId"))
print(f.getvalue("Rating"))
print(f.getvalue("date"))
print(f.getvalue("address"))