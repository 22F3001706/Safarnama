// ═══════════════════════════════
//   SECTION SWITCHING
// ═══════════════════════════════

function showSection(id) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
  });

  // Show the selected section
  const target = document.getElementById(id);
  if (target) target.classList.add('active');

  // Update active state on sub-buttons
  document.querySelectorAll('.sub-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Find and highlight the clicked sub-button
  document.querySelectorAll('.sub-btn').forEach(btn => {
    if (btn.getAttribute('onclick') === `showSection('${id}')`) {
      btn.classList.add('active');
    }
  });
}

// ═══════════════════════════════
//   DROPDOWN TOGGLE
// ═══════════════════════════════

function toggleDropdown(dropId) {
  const drop = document.getElementById(dropId);
  const isOpen = drop.classList.contains('open');

  // Derive arrow id from drop id
  // e.g. 'poems-drop' → 'poems-arrow'
  const arrowId = dropId.replace('-drop', '-arrow');
  const arrow = document.getElementById(arrowId);

  // Close ALL dropdowns and arrows first
  document.querySelectorAll('.dropdown').forEach(d => {
    d.classList.remove('open');
  });
  document.querySelectorAll('.arrow').forEach(a => {
    a.classList.remove('open');
  });
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.remove('active-parent');
  });

  // If it was closed, open it now
  if (!isOpen) {
    drop.classList.add('open');
    if (arrow) arrow.classList.add('open');

    // Highlight parent button
    const parentBtn = drop.previousElementSibling;
    if (parentBtn) parentBtn.classList.add('active-parent');
  }
}

// ═══════════════════════════════
//   CLOSE DROPDOWNS WHEN
//   CLICKING SOLO NAV ITEMS
// ═══════════════════════════════

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown').forEach(d => {
    d.classList.remove('open');
  });
  document.querySelectorAll('.arrow').forEach(a => {
    a.classList.remove('open');
  });
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.remove('active-parent');
  });
}

// Attach closeAllDropdowns to solo nav buttons
// (Philosophy, Ideas, Visuals, About)
document.addEventListener('DOMContentLoaded', () => {
  const soloSections = ['philosophy', 'ideas', 'visuals', 'about'];

  soloSections.forEach(id => {
    document.querySelectorAll('.nav-btn').forEach(btn => {
      if (btn.getAttribute('onclick') === `showSection('${id}')`) {
        btn.addEventListener('click', closeAllDropdowns);
      }
    });
  });
});

// ═══════════════════════════════
//   POEM TWO-STEP NAVIGATION
// ═══════════════════════════════

function showPoem(sectionId, poemId) {
  // Hide the index
  const index = document.getElementById('index-' + sectionId);
  if (index) index.style.display = 'none';

  // Show the single poem container
  const single = document.getElementById('single-' + sectionId);
  if (single) single.style.display = 'block';

  // Hide all poem cards inside single view
  single.querySelectorAll('.poem-card').forEach(card => {
    card.style.display = 'none';
  });

  // Show only the selected poem
  const poem = document.getElementById(poemId);
  if (poem) {
    poem.style.display = 'flex';
    poem.style.animation = 'fadeIn 0.4s ease';
  }
}

function backToIndex(sectionId) {
  // Hide single poem view
  const single = document.getElementById('single-' + sectionId);
  if (single) single.style.display = 'none';

  // Show the index again
  const index = document.getElementById('index-' + sectionId);
  if (index) {
    index.style.display = 'block';
    index.style.animation = 'fadeIn 0.4s ease';
  }
}

// ═══════════════════════════════
//   PHILOSOPHY NAVIGATION
// ═══════════════════════════════

function showPhilosophy(id) {
  const index = document.getElementById('index-philosophy');
  if (index) index.style.display = 'none';

  const single = document.getElementById('single-philosophy');
  if (single) single.style.display = 'block';

  document.querySelectorAll('.philosophy-content').forEach(p => {
    p.style.display = 'none';
  });

  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
    target.style.animation = 'fadeIn 0.4s ease';
  }
}

function backToPhilosophy() {
  const single = document.getElementById('single-philosophy');
  if (single) single.style.display = 'none';

  const index = document.getElementById('index-philosophy');
  if (index) {
    index.style.display = 'block';
    index.style.animation = 'fadeIn 0.4s ease';
  }
}