I will modify `client/src/pages/Home.tsx` to remove the HTML text overlay from the "Cost Breakdown" section in Chapter 3.

**Rationale:**
The user wants the text position and size to be "exactly consistent with the image". The image `cost_ending.png` already contains the text with the desired handwritten style and layout. The current implementation attempts to overlay HTML text on top of the image (or a background), which likely results in misalignment or duplication. By removing the overlay text and displaying the image directly, we ensure the visual presentation matches the design perfectly.

**Steps:**

1. Edit `client/src/pages/Home.tsx`.
2. Locate the `Chapter3Section`.
3. Find the "Custom Layout for Cost Breakdown" block (around line 1074).
4. Remove the `div` element (and its children) that contains the absolute positioned text overlays (lines 1092-1163).
5. Keep the `img` element for `/images/chapter3/cost_ending.png`.

