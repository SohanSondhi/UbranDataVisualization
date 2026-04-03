import PyPDF2
from pathlib import Path

path = Path("data/26-0250_blt_GM_MlinkAmtrak_47x47.5_DCR.pdf")
reader = PyPDF2.PdfReader(path)
for i, page in enumerate(reader.pages[:2]):
    text = page.extract_text()
    print(f"--- PAGE {i} ---")
    print(text[:1200])
