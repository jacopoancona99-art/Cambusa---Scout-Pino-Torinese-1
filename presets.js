// ═══════════════════════════════════════════════════
// MENÙ PRONTI (preset)
// ═══════════════════════════════════════════════════
// Ogni preset porta i piatti e le DOSI A PERSONA (g/ml).
// Il totale viene ricalcolato dall'app sulle presenze del campo corrente.
// Gli ingredienti con perSq:true sono "per squadriglia" (dose ×N squadriglie).
// Per la gara di cucina le quantità sono ASSOLUTE (dose così com'è, ×1).
//
// Struttura menu: { [giorno]: { [pasto]: [ {nome, ingredienti:[{nome,dose,um,perSq}]} ] } }
// Pasti validi: colazione, merenda-mattina, pranzo, merenda, cena, conforto

const MENU_PRONTI = [
  {
    id: 'puy-2024',
    nome: 'PUY 2024',
    giorni: 8,
    descrizione: 'Campo estivo reparto — 8 giorni, con gara di cucina',
    // primo/ultimo pasto del campo (arrivo a pranzo giorno 1, partenza a colazione giorno 8)
    pastoInizio: 'pranzo',
    pastoFine: 'colazione',
    menu: {
      1: {
        pranzo: [{ nome: 'Insalata di pasta (al sacco)', ingredienti: [
          { nome: 'pasta', dose: 150, um: 'g' },
          { nome: 'pomodori', dose: 100, um: 'g' },
          { nome: 'mozzarella', dose: 50, um: 'g' },
          { nome: 'prugne', dose: 60, um: 'g' },
        ]}],
        cena: [{ nome: 'Cous cous di verdure e frutta', ingredienti: [
          { nome: 'cous cous', dose: 60, um: 'g' },
          { nome: 'carote', dose: 60, um: 'g' },
          { nome: 'ceci', dose: 50, um: 'g' },
          { nome: 'zucchine', dose: 50, um: 'g' },
          { nome: 'pomodori', dose: 60, um: 'g' },
          { nome: 'cipolle', dose: 175, um: 'g', perSq: true },
          { nome: 'pesche', dose: 160, um: 'g' },
        ]}],
      },
      2: {
        pranzo: [{ nome: 'Brunch: uova, fagioli, salsiccia e pomodori', ingredienti: [
          { nome: 'salsiccia', dose: 80, um: 'g' },
          { nome: 'fagioli', dose: 100, um: 'g' },
          { nome: 'uova', dose: 2, um: 'pz' },
          { nome: 'sugo', dose: 100, um: 'g' },
          { nome: 'pane', dose: 200, um: 'g' },
          { nome: 'pomodori', dose: 125, um: 'g' },
        ]}],
        merenda: [{ nome: 'Frutta e biscotti', ingredienti: [
          { nome: 'pesche', dose: 60, um: 'g' },
          { nome: 'biscotti', dose: 20, um: 'g' },
        ]}],
        cena: [{ nome: 'Polenta e peperoni', ingredienti: [
          { nome: 'polenta', dose: 110, um: 'g' },
          { nome: 'burro', dose: 30, um: 'g' },
          { nome: 'formaggio', dose: 70, um: 'g' },
          { nome: 'peperoni', dose: 150, um: 'g' },
          { nome: 'prugne', dose: 120, um: 'g' },
        ]}],
      },
      3: {
        colazione: [{ nome: 'Pane e marmellata', ingredienti: [
          { nome: 'pane', dose: 80, um: 'g' },
          { nome: 'marmellata', dose: 50, um: 'g' },
          { nome: 'latte', dose: 100, um: 'ml' },
        ]}],
        pranzo: [{ nome: 'Pasta, insalata e frutta', ingredienti: [
          { nome: 'pasta', dose: 130, um: 'g' },
          { nome: 'sugo', dose: 130, um: 'g' },
          { nome: 'melanzane', dose: 70, um: 'g' },
          { nome: 'ricotta salata', dose: 30, um: 'g' },
          { nome: 'insalata', dose: 500, um: 'g', perSq: true },
          { nome: 'melone', dose: 420, um: 'g', perSq: true },
        ]}],
        merenda: [{ nome: 'Anguria e biscotti', ingredienti: [
          { nome: 'anguria', dose: 400, um: 'g' },
          { nome: 'biscotti', dose: 20, um: 'g' },
        ]}],
        cena: [{ nome: 'Insalata di riso (+ colazione giorno dopo)', ingredienti: [
          { nome: 'riso', dose: 120, um: 'g' },
          { nome: 'pomodori', dose: 30, um: 'g' },
          { nome: 'olive', dose: 30, um: 'g' },
          { nome: 'tonno', dose: 30, um: 'g' },
          { nome: 'mais', dose: 30, um: 'g' },
          { nome: 'pesche', dose: 320, um: 'g' },
          { nome: 'cioccolato', dose: 30, um: 'g' },
          { nome: 'biscotti', dose: 50, um: 'g' },
        ]}],
      },
      4: {
        pranzo: [{ nome: 'Riso al sugo e ratatouille', ingredienti: [
          { nome: 'pasta', dose: 120, um: 'g' },
          { nome: 'sugo', dose: 120, um: 'g' },
          { nome: 'melanzane', dose: 80, um: 'g' },
          { nome: 'zucchine', dose: 50, um: 'g' },
          { nome: 'pomodori', dose: 60, um: 'g' },
        ]}],
        merenda: [{ nome: 'Frutta e biscotti', ingredienti: [
          { nome: 'anguria', dose: 400, um: 'g' },
          { nome: 'biscotti', dose: 20, um: 'g' },
        ]}],
        cena: [{ nome: 'Rosti, uova, carote e frutta', ingredienti: [
          { nome: 'patate', dose: 250, um: 'g' },
          { nome: 'uova', dose: 1.5, um: 'pz' },
          { nome: 'carote', dose: 200, um: 'g' },
          { nome: 'cipolle', dose: 170, um: 'g', perSq: true },
          { nome: 'pane', dose: 30, um: 'g' },
          { nome: 'pesche', dose: 160, um: 'g' },
        ]}],
      },
      5: {
        colazione: [{ nome: 'Pane e marmellata', ingredienti: [
          { nome: 'pane', dose: 80, um: 'g' },
          { nome: 'marmellata', dose: 50, um: 'g' },
          { nome: 'latte', dose: 100, um: 'ml' },
        ]}],
        pranzo: [{ nome: 'Riso al curry e frutta', ingredienti: [
          { nome: 'riso basmati', dose: 120, um: 'g' },
          { nome: 'curry', dose: 5, um: 'g', perSq: true },
          { nome: 'ceci', dose: 65, um: 'g' },
          { nome: 'carote', dose: 200, um: 'g' },
          { nome: 'cipolle', dose: 175, um: 'g', perSq: true },
          { nome: 'pesche', dose: 160, um: 'g' },
        ]}],
        merenda: [{ nome: 'Frutta e biscotti', ingredienti: [
          { nome: 'anguria', dose: 400, um: 'g' },
          { nome: 'biscotti', dose: 20, um: 'g' },
        ]}],
        cena: [{ nome: 'Purè e verdure', ingredienti: [
          { nome: 'patate', dose: 250, um: 'g' },
          { nome: 'latte', dose: 60, um: 'ml' },
          { nome: 'burro', dose: 12.5, um: 'g' },
          { nome: 'pomodori', dose: 120, um: 'g' },
          { nome: 'zucchine', dose: 160, um: 'g' },
          { nome: 'cipolle', dose: 170, um: 'g', perSq: true },
        ]}],
      },
      6: {
        colazione: [{ nome: 'Pane e marmellata', ingredienti: [
          { nome: 'pane', dose: 80, um: 'g' },
          { nome: 'marmellata', dose: 50, um: 'g' },
          { nome: 'latte', dose: 100, um: 'ml' },
        ]}],
        pranzo: [{ nome: 'Pasta al sugo e insalata', ingredienti: [
          { nome: 'pasta', dose: 130, um: 'g' },
          { nome: 'sugo', dose: 120, um: 'g' },
          { nome: 'tonno', dose: 50, um: 'g' },
          { nome: 'mais', dose: 60, um: 'g' },
          { nome: 'pomodori', dose: 60, um: 'g' },
          { nome: 'cipolle', dose: 170, um: 'g', perSq: true },
          { nome: 'prugne', dose: 120, um: 'g' },
        ]}],
        merenda: [{ nome: 'Frutta e biscotti', ingredienti: [
          { nome: 'pesche', dose: 60, um: 'g' },
          { nome: 'biscotti', dose: 20, um: 'g' },
        ]}],
        // Gara di cucina: quantità ASSOLUTE per il reparto (dose così com'è)
        cena: [{ nome: 'Gara di cucina', ingredienti: [
          { nome: 'yogurt', dose: 500, um: 'g', abs: true },
          { nome: 'miele', dose: 250, um: 'g', abs: true },
          { nome: 'carne trita', dose: 600, um: 'g', abs: true },
          { nome: 'cioccolato', dose: 300, um: 'g', abs: true },
          { nome: 'uova', dose: 24, um: 'pz', abs: true },
          { nome: 'latte', dose: 2000, um: 'ml', abs: true },
          { nome: 'farina', dose: 1500, um: 'g', abs: true },
          { nome: 'lievito', dose: 48, um: 'g', abs: true },
          { nome: 'zucchine', dose: 2000, um: 'g', abs: true },
          { nome: 'pomodori', dose: 2400, um: 'g', abs: true },
          { nome: 'mele', dose: 1000, um: 'g', abs: true },
          { nome: 'pesce', dose: 200, um: 'g', abs: true },
          { nome: 'prosciutto cotto', dose: 200, um: 'g', abs: true },
          { nome: 'olive', dose: 370, um: 'g', abs: true },
          { nome: 'acciughe', dose: 60, um: 'g', abs: true },
          { nome: 'melanzane', dose: 1000, um: 'g', abs: true },
          { nome: 'gorgonzola', dose: 350, um: 'g', abs: true },
          { nome: 'peperoni', dose: 1000, um: 'g', abs: true },
          { nome: 'riso', dose: 1000, um: 'g', abs: true },
          { nome: 'sugo', dose: 2000, um: 'g', abs: true },
          { nome: 'conchiglioni', dose: 1000, um: 'g', abs: true },
          { nome: 'cocco', dose: 200, um: 'g', abs: true },
          { nome: 'dado', dose: 16, um: 'g', abs: true },
          { nome: 'cacao', dose: 350, um: 'g', abs: true },
          { nome: 'mascarpone', dose: 200, um: 'g', abs: true },
          { nome: 'farina di ceci', dose: 1000, um: 'g', abs: true },
          { nome: 'banane', dose: 1000, um: 'g', abs: true },
          { nome: 'mozzarella', dose: 1000, um: 'g', abs: true },
          { nome: 'pesche', dose: 1000, um: 'g', abs: true },
          { nome: 'limone', dose: 360, um: 'g', abs: true },
          { nome: 'ananas', dose: 400, um: 'g', abs: true },
          { nome: 'pancetta', dose: 80, um: 'g', abs: true },
          { nome: 'burro', dose: 500, um: 'g', abs: true },
          { nome: 'salsa di soia', dose: 150, um: 'ml', abs: true },
          { nome: 'biscotti', dose: 500, um: 'g', abs: true },
          { nome: 'patate', dose: 1000, um: 'g', abs: true },
        ]}],
      },
      7: {
        colazione: [{ nome: 'Pane e marmellata', ingredienti: [
          { nome: 'pane', dose: 80, um: 'g' },
          { nome: 'marmellata', dose: 50, um: 'g' },
          { nome: 'latte', dose: 100, um: 'ml' },
        ]}],
        pranzo: [{ nome: 'Pasta piselli e panna', ingredienti: [
          { nome: 'pasta', dose: 130, um: 'g' },
          { nome: 'piselli', dose: 80, um: 'g' },
          { nome: 'panna', dose: 50, um: 'ml' },
          { nome: 'cipolle', dose: 170, um: 'g', perSq: true },
          { nome: 'prugne', dose: 120, um: 'g' },
        ]}],
        merenda: [{ nome: 'Anguria', ingredienti: [
          { nome: 'anguria', dose: 400, um: 'g' },
        ]}],
        cena: [{ nome: 'Trapper', ingredienti: [
          { nome: 'salsiccia', dose: 80, um: 'g' },
          { nome: 'rustichelle', dose: 130, um: 'g' },
          { nome: 'zucchine', dose: 100, um: 'g' },
          { nome: 'peperoni', dose: 100, um: 'g' },
          { nome: 'pomodori', dose: 170, um: 'g' },
        ]}],
      },
      8: {
        colazione: [{ nome: 'Pane e marmellata', ingredienti: [
          { nome: 'pane', dose: 80, um: 'g' },
          { nome: 'marmellata', dose: 50, um: 'g' },
          { nome: 'latte', dose: 100, um: 'ml' },
        ]}],
      },
    },
  },
  {
    id: 'weekend-mare',
    nome: 'Weekend al mare',
    giorni: 4,
    descrizione: 'Appartamento con cucina — 4 giorni, pasti semplici',
    pastoInizio: 'cena',      // arrivo venerdì sera
    pastoFine: 'pranzo',      // partenza lunedì dopo pranzo
    menu: {
      // Giorno 1 — Venerdì (solo cena)
      1: {
        cena: [{ nome: 'Pasta al pomodoro', ingredienti: [
          { nome: 'pasta', dose: 100, um: 'g' },
          { nome: 'passata di pomodoro', dose: 120, um: 'g' },
          { nome: 'parmigiano', dose: 15, um: 'g' },
          { nome: 'olio', dose: 5, um: 'ml' },
        ]}],
      },
      // Giorno 2 — Sabato
      2: {
        colazione: [{ nome: 'Colazione', ingredienti: [
          { nome: 'pane', dose: 60, um: 'g' },
          { nome: 'marmellata', dose: 40, um: 'g' },
          { nome: 'latte', dose: 200, um: 'ml' },
          { nome: 'caffè', dose: 8, um: 'g' },
          { nome: 'biscotti', dose: 40, um: 'g' },
        ]}],
        pranzo: [{ nome: 'Insalata di riso', ingredienti: [
          { nome: 'riso', dose: 90, um: 'g' },
          { nome: 'tonno', dose: 50, um: 'g' },
          { nome: 'mais', dose: 40, um: 'g' },
          { nome: 'pomodori', dose: 80, um: 'g' },
          { nome: 'mozzarella', dose: 50, um: 'g' },
          { nome: 'olive', dose: 20, um: 'g' },
        ]}],
        merenda: [{ nome: 'Frutta', ingredienti: [
          { nome: 'pesche', dose: 150, um: 'g' },
        ]}],
        cena: [{ nome: 'Pollo e insalata', ingredienti: [
          { nome: 'petto di pollo', dose: 180, um: 'g' },
          { nome: 'insalata', dose: 80, um: 'g' },
          { nome: 'pomodori', dose: 100, um: 'g' },
          { nome: 'pane', dose: 60, um: 'g' },
          { nome: 'olio', dose: 8, um: 'ml' },
        ]}],
      },
      // Giorno 3 — Domenica
      3: {
        colazione: [{ nome: 'Colazione', ingredienti: [
          { nome: 'pane', dose: 60, um: 'g' },
          { nome: 'marmellata', dose: 40, um: 'g' },
          { nome: 'latte', dose: 200, um: 'ml' },
          { nome: 'caffè', dose: 8, um: 'g' },
          { nome: 'biscotti', dose: 40, um: 'g' },
        ]}],
        pranzo: [{ nome: 'Caprese e pane', ingredienti: [
          { nome: 'mozzarella', dose: 100, um: 'g' },
          { nome: 'pomodori', dose: 150, um: 'g' },
          { nome: 'pane', dose: 80, um: 'g' },
          { nome: 'olio', dose: 8, um: 'ml' },
          { nome: 'basilico', dose: 2, um: 'g' },
        ]}],
        merenda: [{ nome: 'Anguria', ingredienti: [
          { nome: 'anguria', dose: 300, um: 'g' },
        ]}],
        cena: [{ nome: 'Pasta e zucchine', ingredienti: [
          { nome: 'pasta', dose: 100, um: 'g' },
          { nome: 'zucchine', dose: 120, um: 'g' },
          { nome: 'parmigiano', dose: 15, um: 'g' },
          { nome: 'olio', dose: 8, um: 'ml' },
          { nome: 'cipolla', dose: 20, um: 'g' },
        ]}],
      },
      // Giorno 4 — Lunedì (solo pranzo, poi partenza)
      4: {
        colazione: [{ nome: 'Colazione', ingredienti: [
          { nome: 'pane', dose: 60, um: 'g' },
          { nome: 'marmellata', dose: 40, um: 'g' },
          { nome: 'latte', dose: 200, um: 'ml' },
          { nome: 'caffè', dose: 8, um: 'g' },
          { nome: 'biscotti', dose: 40, um: 'g' },
        ]}],
        pranzo: [{ nome: 'Pasta fredda', ingredienti: [
          { nome: 'pasta', dose: 100, um: 'g' },
          { nome: 'pomodorini', dose: 80, um: 'g' },
          { nome: 'mozzarella', dose: 50, um: 'g' },
          { nome: 'olive', dose: 20, um: 'g' },
          { nome: 'olio', dose: 8, um: 'ml' },
        ]}],
      },
    },
  },
  {
    id: 'settimana-montagna',
    nome: 'Settimana in montagna',
    giorni: 7,
    descrizione: 'Casa in montagna con cucina — 7 giorni, piatti caldi e semplici',
    pastoInizio: 'cena',      // arrivo primo giorno a cena
    pastoFine: 'pranzo',      // partenza ultimo giorno dopo pranzo
    menu: {
      // Giorno 1 — arrivo, solo cena
      1: {
        cena: [{ nome: 'Pasta al ragù', ingredienti: [
          { nome: 'pasta', dose: 100, um: 'g' },
          { nome: 'carne macinata', dose: 80, um: 'g' },
          { nome: 'passata di pomodoro', dose: 120, um: 'g' },
          { nome: 'cipolla', dose: 20, um: 'g' },
          { nome: 'carote', dose: 30, um: 'g' },
          { nome: 'parmigiano', dose: 15, um: 'g' },
        ]}],
      },
      // Giorno 2
      2: {
        colazione: [{ nome: 'Colazione', ingredienti: [
          { nome: 'pane', dose: 60, um: 'g' },
          { nome: 'marmellata', dose: 40, um: 'g' },
          { nome: 'latte', dose: 200, um: 'ml' },
          { nome: 'caffè', dose: 8, um: 'g' },
          { nome: 'biscotti', dose: 50, um: 'g' },
        ]}],
        pranzo: [{ nome: 'Minestrone e formaggio', ingredienti: [
          { nome: 'minestrone', dose: 250, um: 'g' },
          { nome: 'patate', dose: 80, um: 'g' },
          { nome: 'pane', dose: 60, um: 'g' },
          { nome: 'formaggio', dose: 60, um: 'g' },
        ]}],
        cena: [{ nome: 'Polenta e spezzatino', ingredienti: [
          { nome: 'polenta', dose: 100, um: 'g' },
          { nome: 'spezzatino', dose: 150, um: 'g' },
          { nome: 'cipolla', dose: 20, um: 'g' },
          { nome: 'carote', dose: 40, um: 'g' },
          { nome: 'passata di pomodoro', dose: 60, um: 'g' },
        ]}],
      },
      // Giorno 3
      3: {
        colazione: [{ nome: 'Colazione', ingredienti: [
          { nome: 'pane', dose: 60, um: 'g' },
          { nome: 'marmellata', dose: 40, um: 'g' },
          { nome: 'latte', dose: 200, um: 'ml' },
          { nome: 'caffè', dose: 8, um: 'g' },
          { nome: 'biscotti', dose: 50, um: 'g' },
        ]}],
        pranzo: [{ nome: 'Pasta al pomodoro', ingredienti: [
          { nome: 'pasta', dose: 100, um: 'g' },
          { nome: 'passata di pomodoro', dose: 120, um: 'g' },
          { nome: 'parmigiano', dose: 15, um: 'g' },
          { nome: 'olio', dose: 5, um: 'ml' },
        ]}],
        cena: [{ nome: 'Zuppa di legumi e crostini', ingredienti: [
          { nome: 'lenticchie', dose: 70, um: 'g' },
          { nome: 'patate', dose: 80, um: 'g' },
          { nome: 'carote', dose: 40, um: 'g' },
          { nome: 'cipolla', dose: 20, um: 'g' },
          { nome: 'pane', dose: 60, um: 'g' },
        ]}],
      },
      // Giorno 4
      4: {
        colazione: [{ nome: 'Colazione', ingredienti: [
          { nome: 'pane', dose: 60, um: 'g' },
          { nome: 'marmellata', dose: 40, um: 'g' },
          { nome: 'latte', dose: 200, um: 'ml' },
          { nome: 'caffè', dose: 8, um: 'g' },
          { nome: 'biscotti', dose: 50, um: 'g' },
        ]}],
        pranzo: [{ nome: 'Risotto allo zafferano', ingredienti: [
          { nome: 'riso', dose: 90, um: 'g' },
          { nome: 'zafferano', dose: 0.1, um: 'g' },
          { nome: 'cipolla', dose: 20, um: 'g' },
          { nome: 'parmigiano', dose: 20, um: 'g' },
          { nome: 'burro', dose: 10, um: 'g' },
        ]}],
        cena: [{ nome: 'Pollo arrosto e patate', ingredienti: [
          { nome: 'pollo', dose: 220, um: 'g' },
          { nome: 'patate', dose: 200, um: 'g' },
          { nome: 'rosmarino', dose: 1, um: 'g' },
          { nome: 'olio', dose: 10, um: 'ml' },
        ]}],
      },
      // Giorno 5
      5: {
        colazione: [{ nome: 'Colazione', ingredienti: [
          { nome: 'pane', dose: 60, um: 'g' },
          { nome: 'marmellata', dose: 40, um: 'g' },
          { nome: 'latte', dose: 200, um: 'ml' },
          { nome: 'caffè', dose: 8, um: 'g' },
          { nome: 'biscotti', dose: 50, um: 'g' },
        ]}],
        pranzo: [{ nome: 'Pasta e fagioli', ingredienti: [
          { nome: 'pasta', dose: 70, um: 'g' },
          { nome: 'fagioli', dose: 80, um: 'g' },
          { nome: 'passata di pomodoro', dose: 50, um: 'g' },
          { nome: 'cipolla', dose: 15, um: 'g' },
        ]}],
        cena: [{ nome: 'Uova, formaggio e verdure', ingredienti: [
          { nome: 'uova', dose: 2, um: 'pz' },
          { nome: 'formaggio', dose: 60, um: 'g' },
          { nome: 'zucchine', dose: 100, um: 'g' },
          { nome: 'pane', dose: 60, um: 'g' },
        ]}],
      },
      // Giorno 6
      6: {
        colazione: [{ nome: 'Colazione', ingredienti: [
          { nome: 'pane', dose: 60, um: 'g' },
          { nome: 'marmellata', dose: 40, um: 'g' },
          { nome: 'latte', dose: 200, um: 'ml' },
          { nome: 'caffè', dose: 8, um: 'g' },
          { nome: 'biscotti', dose: 50, um: 'g' },
        ]}],
        pranzo: [{ nome: 'Pasta al pesto', ingredienti: [
          { nome: 'pasta', dose: 100, um: 'g' },
          { nome: 'pesto', dose: 30, um: 'g' },
          { nome: 'parmigiano', dose: 15, um: 'g' },
        ]}],
        cena: [{ nome: 'Polenta e formaggio fuso', ingredienti: [
          { nome: 'polenta', dose: 100, um: 'g' },
          { nome: 'formaggio', dose: 80, um: 'g' },
          { nome: 'latte', dose: 30, um: 'ml' },
          { nome: 'burro', dose: 10, um: 'g' },
        ]}],
      },
      // Giorno 7 — partenza, solo pranzo
      7: {
        colazione: [{ nome: 'Colazione', ingredienti: [
          { nome: 'pane', dose: 60, um: 'g' },
          { nome: 'marmellata', dose: 40, um: 'g' },
          { nome: 'latte', dose: 200, um: 'ml' },
          { nome: 'caffè', dose: 8, um: 'g' },
          { nome: 'biscotti', dose: 50, um: 'g' },
        ]}],
        pranzo: [{ nome: 'Pasta in bianco e prosciutto', ingredienti: [
          { nome: 'pasta', dose: 100, um: 'g' },
          { nome: 'burro', dose: 10, um: 'g' },
          { nome: 'parmigiano', dose: 20, um: 'g' },
          { nome: 'prosciutto cotto', dose: 60, um: 'g' },
        ]}],
      },
    },
  },
];
