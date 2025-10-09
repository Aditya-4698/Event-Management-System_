#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi

f=cgi.FieldStorage()

print(f.getvalue("VistId"))
print(f.getvalue("vistname"))
print(f.getvalue("description"))