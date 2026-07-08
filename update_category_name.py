with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# Replace everywhere
content = content.replace("Color Correction and Retouchup", "Color Correction and Re-touchup")

with open("src/routes/index.tsx", "w") as f:
    f.write(content)

print("Category renamed successfully.")
