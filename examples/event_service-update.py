#!C:\Users\adity\AppData\Local\Programs\Python\Python39\python.exe
print("Content-Type: text/html\r\n\r\n")    
import cgi
import mysql.connector
con=mysql.connector.connect(user="Aditya",password="Aditya@123",host="localhost",database="event_service")
cur=con.cursor()

f=cgi.FieldStorage()
v=f.getvalue('t')
try:
    if v=='update':
        Events=f.getvalue("ESId") 
        Ser=f.getvalue("SId")
        Create=f.getvalue("Cdate")
        print(Events)
        print(Ser)
        print(Create)

        url="update event_serviceadd set event_serviceid= \'"+str(Events)+"\',service_id=\'"+str(Ser)+"\',date=\'"+str(Create)+"\' where event_serviceid=\'"+str(Events)+"\';"

        cur.execute(url)
        con.commit()
        # print("1")
        # print(url)
#     else:
#         url="delete from event_serviceadd where event_service_id=\'"+f.getvalue('t1')+"\'"
#         cur.execute(url)
#         con.commit()
#         print("Record Successfully Deleted")
# except Exception as e:
#     print("Error:",e)
    elif v == 'delete':
        Events = f.getvalue('t1')
        cur.execute("DELETE FROM event_serviceadd WHERE event_serviceid=%s", (Events,))
        con.commit()
        if cur.rowcount > 0:
            print("Record Successfully Deleted")
        else:
            print("No record deleted — ID not found")

    else:
        print("Invalid operation")
except Exception as e:
    print("Error:", e)
finally:
    con.close()