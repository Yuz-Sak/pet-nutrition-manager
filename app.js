const STORAGE_KEYS = {
  pets: 'petNutritionPets',
  history: 'petNutritionHistory'
};

const INGREDIENTS = [
  { id: 'chicken_breast', name: '鶏胸肉', category: '肉類', kcal: 165, protein: 31, fat: 3.6, carbs: 0, fiber: 0, potassium: 256, phosphorus: 220, calcium: 11, weightPerUnit: 150 },
  { id: 'chicken_thigh', name: '鶏もも肉', category: '肉類', kcal: 208, protein: 19, fat: 13, carbs: 0, fiber: 0, potassium: 270, phosphorus: 200, calcium: 12, weightPerUnit: 150 },
  { id: 'beef', name: '牛肉（ひき肉）', category: '肉類', kcal: 250, protein: 26, fat: 17, carbs: 0, fiber: 0, potassium: 320, phosphorus: 230, calcium: 12, weightPerUnit: 150 },
  { id: 'salmon', name: 'サーモン', category: '魚類', kcal: 208, protein: 20, fat: 13, carbs: 0, fiber: 0, potassium: 363, phosphorus: 290, calcium: 12, weightPerUnit: 150 },
  { id: 'tuna', name: 'ツナ', category: '魚類', kcal: 132, protein: 28, fat: 1, carbs: 0, fiber: 0, potassium: 344, phosphorus: 270, calcium: 15, weightPerUnit: 120 },
  { id: 'egg', name: '卵', category: '卵', kcal: 155, protein: 13, fat: 11, carbs: 1, fiber: 0, potassium: 126, phosphorus: 198, calcium: 56, weightPerUnit: 50 },
  { id: 'tofu', name: '豆腐', category: '大豆', kcal: 76, protein: 8, fat: 5, carbs: 1.5, fiber: 0.7, potassium: 180, phosphorus: 120, calcium: 140, weightPerUnit: 150 },
  { id: 'cabbage', name: 'キャベツ', category: '野菜', kcal: 25, protein: 1.3, fat: 0.1, carbs: 5.8, fiber: 2.5, potassium: 170, phosphorus: 27, calcium: 40, weightPerUnit: 200 },
  { id: 'spinach', name: 'ほうれん草', category: '野菜', kcal: 23, protein: 2.9, fat: 0.4, carbs: 3.6, fiber: 2.2, potassium: 558, phosphorus: 49, calcium: 99, weightPerUnit: 100 },
  { id: 'carrot', name: 'にんじん', category: '野菜', kcal: 41, protein: 0.9, fat: 0.2, carbs: 9.6, fiber: 2.8, potassium: 320, phosphorus: 35, calcium: 33, weightPerUnit: 80 },
  { id: 'sweet_potato', name: 'さつまいも', category: '野菜', kcal: 86, protein: 1.6, fat: 0.1, carbs: 20.1, fiber: 3, potassium: 337, phosphorus: 47, calcium: 30, weightPerUnit: 150 },
  { id: 'pumpkin', name: 'かぼちゃ', category: '野菜', kcal: 26, protein: 1, fat: 0.1, carbs: 6.5, fiber: 0.5, potassium: 340, phosphorus: 34, calcium: 21, weightPerUnit: 150 },
  { id: 'rice_cooked', name: 'ご飯（炊飯後）', category: '主食', kcal: 130, protein: 2.7, fat: 0.3, carbs: 28.1, fiber: 0.4, potassium: 35, phosphorus: 58, calcium: 10, weightPerUnit: 150 },
  { id: 'brown_rice', name: '玄米', category: '主食', kcal: 360, protein: 7.9, fat: 2.7, carbs: 77, fiber: 3.4, potassium: 230, phosphorus: 300, calcium: 20, weightPerUnit: 150 },
  { id: 'oat', name: 'オートミール', category: '主食', kcal: 389, protein: 16.9, fat: 6.9, carbs: 66, fiber: 8, potassium: 429, phosphorus: 374, calcium: 54, weightPerUnit: 40 },
  { id: 'broccoli', name: 'ブロッコリー', category: '野菜', kcal: 34, protein: 2.8, fat: 0.4, carbs: 6.6, fiber: 2.6, potassium: 316, phosphorus: 66, calcium: 47, weightPerUnit: 120 },
  { id: 'green_peas', name: 'グリーンピース', category: '野菜', kcal: 81, protein: 5.4, fat: 0.4, carbs: 14.5, fiber: 5.1, potassium: 271, phosphorus: 99, calcium: 25, weightPerUnit: 100 },
  { id: 'potato', name: 'じゃがいも', category: '野菜', kcal: 77, protein: 2, fat: 0.1, carbs: 17.5, fiber: 2.2, potassium: 421, phosphorus: 57, calcium: 10, weightPerUnit: 150 },
  { id: 'green_bean', name: 'インゲン', category: '野菜', kcal: 31, protein: 2.5, fat: 0.2, carbs: 6.4, fiber: 2.9, potassium: 211, phosphorus: 38, calcium: 37, weightPerUnit: 100 },
  { id: 'cauliflower', name: 'カリフラワー', category: '野菜', kcal: 25, protein: 2, fat: 0.3, carbs: 4.9, fiber: 2, potassium: 295, phosphorus: 44, calcium: 22, weightPerUnit: 150 },
  { id: 'kiwi', name: 'キウイ', category: '果物', kcal: 61, protein: 1.1, fat: 0.5, carbs: 14.7, fiber: 3, potassium: 312, phosphorus: 34, calcium: 34, weightPerUnit: 100 },
  { id: 'apple', name: 'りんご', category: '果物', kcal: 52, protein: 0.3, fat: 0.2, carbs: 13.8, fiber: 2.4, potassium: 107, phosphorus: 11, calcium: 6, weightPerUnit: 150 },
  { id: 'banana', name: 'バナナ', category: '果物', kcal: 89, protein: 1.1, fat: 0.3, carbs: 22.8, fiber: 2.6, potassium: 358, phosphorus: 22, calcium: 5, weightPerUnit: 120 },
  { id: 'yogurt', name: 'ヨーグルト', category: '乳製品', kcal: 61, protein: 10, fat: 1.5, carbs: 3.6, fiber: 0, potassium: 141, phosphorus: 94, calcium: 150, weightPerUnit: 150 },
  { id: 'whitefish', name: '白身魚', category: '魚類', kcal: 82, protein: 18, fat: 1, carbs: 0, fiber: 0, potassium: 330, phosphorus: 220, calcium: 12, weightPerUnit: 150 },
  { id: 'shrimp', name: 'えび', category: '魚介', kcal: 99, protein: 24, fat: 0.3, carbs: 0.3, fiber: 0, potassium: 240, phosphorus: 190, calcium: 48, weightPerUnit: 120 },
  { id: 'lentils', name: 'レンズ豆', category: '豆類', kcal: 116, protein: 9, fat: 0.4, carbs: 20, fiber: 8, potassium: 369, phosphorus: 180, calcium: 19, weightPerUnit: 100 },
  { id: 'chickpea', name: 'ひよこ豆', category: '豆類', kcal: 164, protein: 8.9, fat: 2.6, carbs: 27.4, fiber: 7.9, potassium: 291, phosphorus: 168, calcium: 49, weightPerUnit: 100 },
  { id: 'quinoa', name: 'キヌア', category: '主食', kcal: 120, protein: 4.4, fat: 1.9, carbs: 21.3, fiber: 2.8, potassium: 172, phosphorus: 152, calcium: 17, weightPerUnit: 100 },
  { id: 'sweetcorn', name: 'とうもろこし', category: '野菜', kcal: 86, protein: 3.2, fat: 1.2, carbs: 18.7, fiber: 2.0, potassium: 270, phosphorus: 89, calcium: 2, weightPerUnit: 150 },
  { id: 'mushroom', name: 'きのこ', category: '野菜', kcal: 22, protein: 3.1, fat: 0.3, carbs: 3.3, fiber: 1.0, potassium: 448, phosphorus: 86, calcium: 3, weightPerUnit: 100 },
  { id: 'tomato', name: 'トマト', category: '野菜', kcal: 18, protein: 0.9, fat: 0.2, carbs: 3.9, fiber: 1.2, potassium: 237, phosphorus: 27, calcium: 10, weightPerUnit: 150 },
  { id: 'cucumber', name: 'きゅうり', category: '野菜', kcal: 16, protein: 0.7, fat: 0.1, carbs: 3.6, fiber: 0.5, potassium: 147, phosphorus: 24, calcium: 16, weightPerUnit: 150 },
  { id: 'pear', name: 'なし', category: '果物', kcal: 57, protein: 0.4, fat: 0.1, carbs: 15.2, fiber: 3.1, potassium: 116, phosphorus: 12, calcium: 9, weightPerUnit: 150 },
  { id: 'blueberry', name: 'ブルーベリー', category: '果物', kcal: 57, protein: 0.7, fat: 0.3, carbs: 14.5, fiber: 2.4, potassium: 77, phosphorus: 12, calcium: 6, weightPerUnit: 100 },
  { id: 'olive_oil', name: 'オリーブオイル', category: '油脂', kcal: 884, protein: 0, fat: 100, carbs: 0, fiber: 0, potassium: 1, phosphorus: 0, calcium: 1, weightPerUnit: 15 },
  { id: 'salmon_roe', name: 'いくら', category: '魚介', kcal: 146, protein: 24, fat: 4, carbs: 1, fiber: 0, potassium: 160, phosphorus: 240, calcium: 60, weightPerUnit: 100 },
  { id: 'turkey', name: '七面鳥', category: '肉類', kcal: 189, protein: 22, fat: 10, carbs: 0, fiber: 0, potassium: 285, phosphorus: 210, calcium: 10, weightPerUnit: 150 },
  { id: 'duck', name: '鴨肉', category: '肉類', kcal: 201, protein: 19, fat: 13, carbs: 0, fiber: 0, potassium: 280, phosphorus: 205, calcium: 12, weightPerUnit: 150 },
  { id: 'liver', name: 'レバー', category: '肉類', kcal: 135, protein: 20, fat: 4, carbs: 1.5, fiber: 0, potassium: 250, phosphorus: 320, calcium: 8, weightPerUnit: 120 },
  { id: 'wheat_bread', name: '全粒パン', category: '主食', kcal: 247, protein: 10, fat: 3, carbs: 45, fiber: 7, potassium: 220, phosphorus: 185, calcium: 23, weightPerUnit: 100 },
  { id: 'barley', name: '大麦', category: '主食', kcal: 354, protein: 12.5, fat: 2.3, carbs: 73.5, fiber: 17.3, potassium: 452, phosphorus: 221, calcium: 29, weightPerUnit: 100 },
  { id: 'sweet_potato_leaf', name: 'さつまいも葉', category: '野菜', kcal: 36, protein: 4.3, fat: 0.6, carbs: 6.5, fiber: 3.6, potassium: 327, phosphorus: 54, calcium: 93, weightPerUnit: 100 }
];

const defaultIngredients = [
  { ingredientId: 'chicken_breast', quantity: 300, unit: 'g' },
  { ingredientId: 'cabbage', quantity: 200, unit: 'g' },
  { ingredientId: 'carrot', quantity: 1, unit: '個' },
  { ingredientId: 'rice_cooked', quantity: 200, unit: 'g' }
];

const defaultPets = [
  { id: 1, name: '犬1', type: 'dog', weight: 10, rating: 3, active: true },
  { id: 2, name: '犬2', type: 'dog', weight: 8, rating: 4, active: false }
];

const els = {
  homeScreen: document.getElementById('homeScreen'),
  ingredientScreen: document.getElementById('ingredientScreen'),
  navButtons: document.querySelectorAll('.nav-button'),
  petList: document.getElementById('petList'),
  ingredientList: document.getElementById('ingredientList'),
  ingredientSearch: document.getElementById('ingredientSearch'),
  recipeDays: document.getElementById('recipeDays'),
  recipeNote: document.getElementById('recipeNote'),
  dailyTargetCard: document.getElementById('dailyTargetCard'),
  totalKcal: document.getElementById('totalKcal'),
  totalProtein: document.getElementById('totalProtein'),
  totalFat: document.getElementById('totalFat'),
  totalCarbs: document.getElementById('totalCarbs'),
  totalFiber: document.getElementById('totalFiber'),
  totalPotassium: document.getElementById('totalPotassium'),
  totalPhosphorus: document.getElementById('totalPhosphorus'),
  totalWeight: document.getElementById('totalWeight'),
  dailyKcal: document.getElementById('dailyKcal'),
  dailyProtein: document.getElementById('dailyProtein'),
  dailyFiber: document.getElementById('dailyFiber'),
  dailyPhosphorus: document.getElementById('dailyPhosphorus'),
  dailyPotassium: document.getElementById('dailyPotassium'),
  balanceList: document.getElementById('balanceList'),
  historyList: document.getElementById('historyList'),
  saveHistory: document.getElementById('saveHistory'),
  addPetBtn: document.getElementById('addPetBtn'),
  addIngredientBtn: document.getElementById('addSelectedIngredientBtn'),
  goHomeBtn: document.getElementById('goHomeBtn'),
  nutritionChart: document.getElementById('nutritionChart')
};

function showScreen(screenName) {
  const screens = {
    home: els.homeScreen,
    ingredient: els.ingredientScreen
  };

  Object.entries(screens).forEach(([key, screen]) => {
    screen.classList.toggle('active', key === screenName);
  });

  els.navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.screen === screenName);
  });
}

function loadPets() {
  const saved = localStorage.getItem(STORAGE_KEYS.pets);
  return saved ? JSON.parse(saved) : defaultPets;
}

function savePets(pets) {
  localStorage.setItem(STORAGE_KEYS.pets, JSON.stringify(pets));
}

function loadHistory() {
  const saved = localStorage.getItem(STORAGE_KEYS.history);
  return saved ? JSON.parse(saved) : [];
}

function saveHistoryData(history) {
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(history));
}

function getSelectedPets() {
  return loadPets().filter((pet) => pet.active !== false);
}

function renderPetList() {
  const pets = loadPets();
  els.petList.innerHTML = pets.map((pet) => `
    <div class="pet-card">
      <label class="toggle-row">
        <input type="checkbox" class="pet-active" data-pet-id="${pet.id}" ${pet.active !== false ? 'checked' : ''} />
        <span>選択中</span>
      </label>
      <div class="pet-inputs">
        <input class="pet-name-input" data-pet-id="${pet.id}" type="text" value="${pet.name}" aria-label="ペット名" />
        <select class="pet-type-select" data-pet-id="${pet.id}" aria-label="ペット種別">
          <option value="dog" ${pet.type === 'dog' ? 'selected' : ''}>犬</option>
          <option value="cat" ${pet.type === 'cat' ? 'selected' : ''}>猫</option>
        </select>
        <div class="input-inline compact-input">
          <input class="pet-weight-input" data-pet-id="${pet.id}" type="number" min="1" step="0.1" value="${pet.weight}" aria-label="体重" />
          <small>kg</small>
        </div>
      </div>
      <div class="rating-row">
        ${[1, 2, 3, 4, 5].map((value) => `
          <button type="button" class="pet-star ${value <= pet.rating ? 'filled' : ''}" data-pet-id="${pet.id}" data-value="${value}">${value <= pet.rating ? '★' : '☆'}</button>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function handlePetInput(event) {
  if (!event.target.dataset.petId) return;
  const petId = Number(event.target.dataset.petId);
  const pets = loadPets();
  const pet = pets.find((item) => item.id === petId);
  if (!pet) return;

  if (event.target.classList.contains('pet-name-input')) {
    pet.name = event.target.value || `犬${petId}`;
  }
  if (event.target.classList.contains('pet-type-select')) {
    pet.type = event.target.value;
  }
  if (event.target.classList.contains('pet-weight-input')) {
    pet.weight = Number(event.target.value || 1);
  }
  if (event.target.classList.contains('pet-active')) {
    pet.active = event.target.checked;
  }

  savePets(pets);
  renderNutrition();
}

function addPet() {
  const pets = loadPets();
  const nextId = pets.length ? Math.max(...pets.map((pet) => pet.id)) + 1 : 1;
  pets.push({ id: nextId, name: `犬${nextId}`, type: 'dog', weight: 10, rating: 3, active: true });
  savePets(pets);
  renderPetList();
}

function populateIngredientOptions() {
  const datalist = document.getElementById('ingredientOptions');
  datalist.innerHTML = INGREDIENTS.map((item) => `<option value="${item.name}"></option>`).join('');
}

function getIngredientById(id) {
  return INGREDIENTS.find((item) => item.id === id) || INGREDIENTS[0];
}

function getIngredientGrams(item, quantity, unit) {
  const value = Number(quantity || 0);
  if (unit === '個') {
    return value * (item.weightPerUnit || 100);
  }
  return value;
}

function getCurrentIngredientEntries() {
  return [...document.querySelectorAll('.ingredient-row')].map((row) => ({
    ingredientId: row.querySelector('.ingredient-select').value,
    quantity: Number(row.querySelector('.ingredient-qty').value || 0),
    unit: row.querySelector('.ingredient-unit').value
  }));
}

function getNutritionTotals() {
  const totals = { kcal: 0, protein: 0, fat: 0, carbs: 0, fiber: 0, potassium: 0, phosphorus: 0, weight: 0 };

  [...document.querySelectorAll('.ingredient-row')].forEach((row) => {
    const ingredient = getIngredientById(row.querySelector('.ingredient-select').value);
    const quantity = Number(row.querySelector('.ingredient-qty').value || 0);
    const unit = row.querySelector('.ingredient-unit').value;
    const grams = getIngredientGrams(ingredient, quantity, unit);
    const factor = grams / 100;

    totals.kcal += ingredient.kcal * factor;
    totals.protein += ingredient.protein * factor;
    totals.fat += ingredient.fat * factor;
    totals.carbs += ingredient.carbs * factor;
    totals.fiber += ingredient.fiber * factor;
    totals.potassium += ingredient.potassium * factor;
    totals.phosphorus += ingredient.phosphorus * factor;
    totals.weight += grams;
  });

  return totals;
}

function getDailyTarget() {
  const selectedPets = getSelectedPets();
  if (!selectedPets.length) return 0;
  return selectedPets.reduce((sum, pet) => {
    const base = pet.type === 'dog' ? 32 : 45;
    return sum + Math.round((pet.weight || 10) * base);
  }, 0);
}

function getBalanceStatus(value, ideal) {
  const ratio = ideal === 0 ? 0 : value / ideal;
  return ratio >= 0.8 && ratio <= 1.2 ? 'ok' : 'warn';
}

function renderNutrition() {
  const totals = getNutritionTotals();
  const days = Number(els.recipeDays.value || 1);
  const dailyTarget = getDailyTarget();

  els.totalKcal.textContent = `${totals.kcal.toFixed(0)} kcal`;
  els.totalProtein.textContent = `${totals.protein.toFixed(1)} g`;
  els.totalFat.textContent = `${totals.fat.toFixed(1)} g`;
  els.totalCarbs.textContent = `${totals.carbs.toFixed(1)} g`;
  els.totalFiber.textContent = `${totals.fiber.toFixed(1)} g`;
  els.totalPotassium.textContent = `${totals.potassium.toFixed(0)} mg`;
  els.totalPhosphorus.textContent = `${totals.phosphorus.toFixed(0)} mg`;
  els.totalWeight.textContent = `${totals.weight.toFixed(0)} g`;

  const dailyKcal = totals.kcal / days;
  const dailyProtein = totals.protein / days;
  const dailyFiber = totals.fiber / days;
  const dailyPhosphorus = totals.phosphorus / days;
  const dailyPotassium = totals.potassium / days;

  if (els.dailyTargetCard) {
    els.dailyTargetCard.textContent = `${dailyTarget} kcal/日`;
  }

  els.dailyKcal.textContent = `${dailyKcal.toFixed(0)} kcal`;
  els.dailyProtein.textContent = `${dailyProtein.toFixed(1)} g`;
  els.dailyFiber.textContent = `${dailyFiber.toFixed(1)} g`;
  els.dailyPhosphorus.textContent = `${dailyPhosphorus.toFixed(0)} mg`;
  els.dailyPotassium.textContent = `${dailyPotassium.toFixed(0)} mg`;

  const balanceData = [
    { label: 'カロリー', value: dailyKcal, ideal: dailyTarget || 1, unit: 'kcal' },
    { label: 'たんぱく質', value: dailyProtein, ideal: 25, unit: 'g' },
    { label: '食物繊維', value: dailyFiber, ideal: 4, unit: 'g' },
    { label: 'リン', value: dailyPhosphorus, ideal: 400, unit: 'mg' },
    { label: 'カリウム', value: dailyPotassium, ideal: 400, unit: 'mg' }
  ];

  els.balanceList.innerHTML = balanceData.map((item) => `
    <li>
      <span class="balance-label">${item.label}</span>
      <span class="balance-value ${getBalanceStatus(item.value, item.ideal)}">${item.value.toFixed(0)} / ${item.ideal} ${item.unit}</span>
    </li>
  `).join('');
}

function createIngredientRow(entry = null) {
  const row = document.createElement('div');
  row.className = 'ingredient-row';

  const selectedId = entry ? entry.ingredientId : INGREDIENTS[0].id;
  const quantity = entry ? entry.quantity : 100;
  const unit = entry ? entry.unit : 'g';

  row.innerHTML = `
    <div class="row-top">
      <select class="ingredient-select" aria-label="食材選択">
        ${INGREDIENTS.map((item) => `<option value="${item.id}" ${item.id === selectedId ? 'selected' : ''}>${item.name}</option>`).join('')}
      </select>
      <button class="remove-button" type="button">削除</button>
    </div>
    <div class="row-bottom">
      <label>
        <span>量</span>
        <input class="ingredient-qty" type="number" min="0" step="1" value="${quantity}" />
      </label>
      <label>
        <span>単位</span>
        <select class="ingredient-unit" aria-label="単位選択">
          <option value="g" ${unit === 'g' ? 'selected' : ''}>g</option>
          <option value="個" ${unit === '個' ? 'selected' : ''}>個</option>
        </select>
      </label>
      <div class="target-box small">${getIngredientById(selectedId).name}</div>
    </div>
  `;

  const ingredientSelect = row.querySelector('.ingredient-select');
  const qtyInput = row.querySelector('.ingredient-qty');
  const unitSelect = row.querySelector('.ingredient-unit');
  const estimateBox = row.querySelector('.target-box');

  const updateEstimate = () => {
    const chosen = getIngredientById(ingredientSelect.value);
    const grams = getIngredientGrams(chosen, Number(qtyInput.value || 0), unitSelect.value);
    const kcal = (chosen.kcal * (grams / 100)).toFixed(0);
    estimateBox.textContent = `${grams.toFixed(0)}g / ${kcal}kcal`;
  };

  ingredientSelect.addEventListener('change', updateEstimate);
  qtyInput.addEventListener('input', updateEstimate);
  unitSelect.addEventListener('change', updateEstimate);
  row.querySelector('.remove-button').addEventListener('click', () => {
    row.remove();
    renderNutrition();
  });

  updateEstimate();
  return row;
}

function addIngredientRow(entry = null) {
  els.ingredientList.appendChild(createIngredientRow(entry));
  renderNutrition();
}

function addIngredientFromSearch() {
  const value = els.ingredientSearch.value.trim();
  const ingredient = INGREDIENTS.find((item) => item.name === value);
  if (!ingredient) {
    alert('食材を選んでください');
    return;
  }
  addIngredientRow({ ingredientId: ingredient.id, quantity: 100, unit: 'g' });
  els.ingredientSearch.value = '';
}

function renderHistory() {
  const records = loadHistory();

  if (!records.length) {
    els.historyList.innerHTML = '<div class="empty-history">まだ保存された履歴はありません。</div>';
    return;
  }

  els.historyList.innerHTML = records.slice(0, 5).map((item) => {
    const createdDate = new Date(item.savedAt).toLocaleString('ja-JP', {
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    const ratingText = '★'.repeat(item.rating || 3) + '☆'.repeat(5 - (item.rating || 3));

    return `
      <div class="history-item">
        <div class="history-head">
          <strong>${item.petNames.join(', ')}</strong>
          <span class="history-date">${createdDate}</span>
        </div>
        <div class="history-meta">
          <span>${item.days}日分</span>
          <span>${item.targetKcal} kcal/日</span>
          <span>評価: ${ratingText}</span>
        </div>
        <div class="history-note">${item.note || 'メモなし'}</div>
      </div>
    `;
  }).join('');
}

function renderChart() {
  const canvas = els.nutritionChart;
  const ctx = canvas.getContext('2d');
  const records = loadHistory().slice(0, 5);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (!records.length) {
    ctx.fillStyle = '#657286';
    ctx.font = '14px sans-serif';
    ctx.fillText('履歴がまだありません', 70, 94);
    return;
  }

  const padding = { top: 20, right: 20, bottom: 30, left: 35 };
  const chartWidth = canvas.width - padding.left - padding.right;
  const chartHeight = canvas.height - padding.top - padding.bottom;
  const maxValue = Math.max(...records.map((entry) => Math.max(entry.summary.dailyKcal, entry.summary.dailyProtein * 12, entry.summary.dailyPotassium / 30)), 1);

  ctx.strokeStyle = '#e7d9d0';
  for (let i = 0; i <= 4; i += 1) {
    const y = padding.top + (chartHeight / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(canvas.width - padding.right, y);
    ctx.stroke();
  }

  const groupWidth = chartWidth / records.length;
  const barWidth = groupWidth * 0.2;

  records.forEach((entry, index) => {
    const x = padding.left + index * groupWidth + 10;
    const kcalHeight = (entry.summary.dailyKcal / maxValue) * chartHeight;
    const proteinHeight = (entry.summary.dailyProtein * 12 / maxValue) * chartHeight;
    const potassiumHeight = (entry.summary.dailyPotassium / 30 / maxValue) * chartHeight;

    ctx.fillStyle = '#ff8a5c';
    ctx.fillRect(x, padding.top + chartHeight - kcalHeight, barWidth, kcalHeight);
    ctx.fillStyle = '#4db785';
    ctx.fillRect(x + barWidth + 6, padding.top + chartHeight - proteinHeight, barWidth, proteinHeight);
    ctx.fillStyle = '#5a8dee';
    ctx.fillRect(x + (barWidth + 6) * 2, padding.top + chartHeight - potassiumHeight, barWidth, potassiumHeight);

    ctx.fillStyle = '#657286';
    ctx.font = '10px sans-serif';
    ctx.fillText(String(index + 1), x + 8, canvas.height - 8);
  });

  ctx.fillStyle = '#ff8a5c';
  ctx.fillText('kcal', 8, 20);
  ctx.fillStyle = '#4db785';
  ctx.fillText('たんぱく', 8, 38);
  ctx.fillStyle = '#5a8dee';
  ctx.fillText('K mg', 8, 56);
}

function saveCurrentRecipeHistory() {
  const selectedPets = getSelectedPets();
  if (!selectedPets.length) {
    alert('少なくとも1匹の犬を選択してください');
    return;
  }

  const totals = getNutritionTotals();
  const days = Number(els.recipeDays.value || 7);
  const record = {
    id: Date.now(),
    savedAt: new Date().toISOString(),
    petNames: selectedPets.map((pet) => pet.name),
    days,
    rating: selectedPets[0].rating || 3,
    note: els.recipeNote.value.trim(),
    targetKcal: getDailyTarget(),
    summary: {
      totalKcal: totals.kcal,
      totalProtein: totals.protein,
      totalFat: totals.fat,
      totalCarbs: totals.carbs,
      totalFiber: totals.fiber,
      totalPotassium: totals.potassium,
      totalPhosphorus: totals.phosphorus,
      totalWeight: totals.weight,
      dailyKcal: totals.kcal / days,
      dailyProtein: totals.protein / days,
      dailyFiber: totals.fiber / days,
      dailyPotassium: totals.potassium / days,
      dailyPhosphorus: totals.phosphorus / days
    }
  };

  const records = loadHistory();
  records.unshift(record);
  saveHistoryData(records.slice(0, 20));
  renderHistory();
  renderChart();
  alert('履歴に保存しました');
}

function bindEvents() {
  document.querySelectorAll('.nav-button').forEach((button) => {
    button.addEventListener('click', () => showScreen(button.dataset.screen));
  });

  els.addPetBtn.addEventListener('click', addPet);
  els.goHomeBtn.addEventListener('click', () => showScreen('home'));
  els.addIngredientBtn.addEventListener('click', addIngredientFromSearch);
  els.saveHistory.addEventListener('click', saveCurrentRecipeHistory);

  els.ingredientSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addIngredientFromSearch();
    }
  });

  els.recipeDays.addEventListener('input', renderNutrition);
  els.recipeDays.addEventListener('change', renderNutrition);
  els.recipeNote.addEventListener('input', () => renderNutrition());

  els.ingredientList.addEventListener('input', renderNutrition);
  els.ingredientList.addEventListener('change', renderNutrition);

  els.petList.addEventListener('input', handlePetInput);
  els.petList.addEventListener('change', handlePetInput);
  els.petList.addEventListener('click', (event) => {
    const star = event.target.closest('.pet-star');
    if (!star) return;
    const petId = Number(star.dataset.petId);
    const pets = loadPets();
    const pet = pets.find((item) => item.id === petId);
    if (!pet) return;
    pet.rating = Number(star.dataset.value);
    savePets(pets);
    renderPetList();
  });
}

function initializeDefaultRecipe() {
  els.ingredientList.innerHTML = '';
  defaultIngredients.forEach((item) => addIngredientRow(item));
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch((error) => {
        console.warn('Service worker registration failed:', error);
      });
    });
  }
}

function init() {
  if (!localStorage.getItem(STORAGE_KEYS.pets)) {
    savePets(defaultPets);
  }
  populateIngredientOptions();
  renderPetList();
  initializeDefaultRecipe();
  bindEvents();
  renderNutrition();
  renderHistory();
  renderChart();
  showScreen('home');
  registerServiceWorker();
}

init();
