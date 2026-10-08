import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';

import { StudentCard } from './student-card';
import { Student } from '../01-basics/student.model';

describe('StudentCard', () => {
  const testStudent: Student = {
    id: 10,
    name: 'Uczeń A',
    subject: 'matematyka',
    level: 'matura',
    active: true,
  };

  // In a zoneless app prefer whenStable over detectChanges: it also covers work
  // scheduled by effects and resources, which detectChanges would miss.
  const createComponent = async (student: Student = testStudent, compact = false) => {
    const fixture: ComponentFixture<StudentCard> = TestBed.createComponent(StudentCard);
    fixture.componentRef.setInput('student', student);
    fixture.componentRef.setInput('compact', compact);
    await fixture.whenStable();
    return fixture;
  };

  it('renders student details in the full view', async () => {
    const fixture = await createComponent();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.textContent).toContain('Uczeń A');
    expect(element.textContent).toContain('matematyka matura');
    expect(element.querySelector('button')?.textContent?.trim()).toBe('aktywny');
  });

  it('renders initials without the button in the compact view', async () => {
    const fixture = await createComponent(testStudent, true);
    const element = fixture.nativeElement as HTMLElement;

    expect(element.textContent).toContain('UA Uczeń A');
    expect(element.querySelector('button')).toBeNull();
  });

  it('renders the inactive status', async () => {
    const fixture = await createComponent({ ...testStudent, active: false });
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('button')?.textContent?.trim()).toBe('nieaktywny');
  });

  it('emits the student id through toggleActiveClick', async () => {
    const fixture = await createComponent();
    let emittedId: number | undefined;
    fixture.componentInstance.toggleActiveClick.subscribe((id) => (emittedId = id));

    (fixture.nativeElement as HTMLElement).querySelector('button')?.click();

    expect(emittedId).toBe(testStudent.id);
  });

  // This is the test that makes ngOnChanges unnecessary: the computed values
  // follow the input on their own, with no lifecycle hook involved.
  it('updates derived values when the student input changes', async () => {
    const fixture = await createComponent();
    const element = fixture.nativeElement as HTMLElement;

    fixture.componentRef.setInput('student', {
      ...testStudent,
      name: 'Uczeń B',
      subject: 'fizyka',
    });
    await fixture.whenStable();

    expect(element.textContent).toContain('Uczeń B');
    expect(element.textContent).toContain('fizyka matura');
  });

  it('switches to the compact view when the compact input changes', async () => {
    const fixture = await createComponent(testStudent, false);
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('button')).not.toBeNull();

    fixture.componentRef.setInput('compact', true);
    await fixture.whenStable();

    expect(element.querySelector('button')).toBeNull();
    expect(element.textContent).toContain('UA Uczeń A');
  });
});
