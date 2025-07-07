export interface ProjectHistoryItem {
  topic: string;
  category: string;
  timestamp: string;
}

const STORAGE_KEY = 'projectHistory';
const MAX_HISTORY_ITEMS = 5;

export function saveProjectToHistory(topic: string, category: string): void {
  const project: ProjectHistoryItem = {
    topic,
    category,
    timestamp: new Date().toISOString(),
  };

  let history = getProjectHistory();
  
  // Remove duplicate if exists (same topic and category)
  history = history.filter(
    item => !(item.topic === topic && item.category === category)
  );
  
  // Add new project to the beginning
  history.unshift(project);
  
  // Keep only the most recent items
  history = history.slice(0, MAX_HISTORY_ITEMS);
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function getProjectHistory(): ProjectHistoryItem[] {
  try {
    const historyJson = localStorage.getItem(STORAGE_KEY);
    if (!historyJson) return [];
    
    const history = JSON.parse(historyJson) as ProjectHistoryItem[];
    return Array.isArray(history) ? history : [];
  } catch (error) {
    console.error('Error loading project history:', error);
    return [];
  }
}

export function clearProjectHistory(): void {
  localStorage.removeItem(STORAGE_KEY);
}
