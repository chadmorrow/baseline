# Baseline

This is a kind of workforce management app with three major parts:

  - Employee level for setting availabilities, trading shifts, requesting time off, etc.
  - Manager level for approving shift trades and time off requests, and constructing a daily shift plan where they can take the aggregate employee hours available per hour and distribute them across multiple projects
  - Director level for seeing the aggregate hours available from each manager so they can distribute an appropriate amount of work to each manager.

  The goal of this application is take many employee schedules and reducing them down and down until a single person can assign many units of work across a distributed set of locations.

## Needed functionality

### Base level
- [ ] Login process
- [ ] User roles
- [ ] Onboarding process
- [ ] Offboarding process

### Employee level
- [ ] Create availability
- [ ] Trade shifts
- [ ] Skill system
- [ ] Request time off
- [ ] Create temporary availability
- [ ] On leave, suspended processes
- [ ] Schedule adherence tracking

### Manager level 
- [ ] Approval process for time off requests, shift trades
- [ ] Create shift plan
- [ ] Report hours
- [ ] Hours estimator

### Director level
- [ ] Project import process
- [ ] Create workload plan
