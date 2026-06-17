// Countdown — 4 cajas (días/horas/minutos/segundos) que tickean en vivo hacia una
// fecha objetivo. Trasladado del Countdown de Spark; estilizado con tokens --aa-*.

interface Unit {
  key: 'days' | 'hours' | 'minutes' | 'seconds';
  label: string;
}

const UNITS: Unit[] = [
  { key: 'days', label: 'días' },
  { key: 'hours', label: 'horas' },
  { key: 'minutes', label: 'minutos' },
  { key: 'seconds', label: 'segundos' },
];

const pad = (n: number): string => String(Math.max(0, n)).padStart(2, '0');

export function renderCountdown(target: Date): HTMLElement {
  const el = document.createElement('div');
  el.className = 'aa-countdown';

  const nums = {} as Record<Unit['key'], HTMLElement>;
  UNITS.forEach((u) => {
    const unit = document.createElement('div');
    unit.className = 'aa-countdown__unit';

    const num = document.createElement('span');
    num.className = 'aa-countdown__num';
    num.textContent = '00';

    const label = document.createElement('span');
    label.className = 'aa-countdown__label';
    label.textContent = u.label;

    unit.append(num, label);
    el.appendChild(unit);
    nums[u.key] = num;
  });

  function tick(): void {
    const totalSec = Math.max(0, Math.floor((target.getTime() - Date.now()) / 1000));
    nums.days.textContent = pad(Math.floor(totalSec / 86400));
    nums.hours.textContent = pad(Math.floor((totalSec % 86400) / 3600));
    nums.minutes.textContent = pad(Math.floor((totalSec % 3600) / 60));
    nums.seconds.textContent = pad(totalSec % 60);
    if (totalSec === 0) window.clearInterval(id);
  }

  tick();
  const id = window.setInterval(tick, 1000);
  return el;
}
