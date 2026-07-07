import json
import re

with open("generated_works.json", "r") as f:
    works = json.load(f)

works_str = "[\n"
for w in works:
    works_str += f'  {{ title: "{w["title"]}", tag: "{w["tag"]}", category: "{w["category"]}", gradient: "{w["gradient"]}", image: "{w["image"]}" }},\n'
works_str += "]"

with open("src/routes/index.tsx", "r") as f:
    content = f.read()

# find "const works:" and the closing "];"
start_idx = content.find("}[] = [")
if start_idx != -1:
    end_idx = content.find("];\n", start_idx)
    
    if end_idx != -1:
        new_content = content[:start_idx + 6] + works_str + content[end_idx + 1:]
        
        with open("src/routes/index.tsx", "w") as f:
            f.write(new_content)
        print("Successfully updated index.tsx")
    else:
        print("Could not find end of works array")
else:
    print("Could not find start of works array")
