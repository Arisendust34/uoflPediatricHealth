import tkinter as tk


def click():
    print("User")


root = tk.Tk()
frame = tk.Frame(root)
frame.pack()

button1 = tk.Button(frame,
                   text="User 1",
                   fg="red",
                   command=click)
button1.pack(side=tk.LEFT)
button2 = tk.Button(frame,
                   text="User 2",
                   command=click)
button2.pack(side=tk.LEFT)
button3 = tk.Button(frame,
                   text="User 3",
                   command=click)
button3.pack(side=tk.LEFT)
button4 = tk.Button(frame,
                   text="User 4",
                   command=click)
button4.pack(side=tk.LEFT)
buttonq = tk.Button(frame,
                   text="Home",
                   command=quit)
buttonq.pack(side=tk.LEFT)
root.mainloop()
