## Data Models

**Constants**
minutesPerSlot: 5 int

**Appointment:**
date: Date (Carbon)
start: DateTime (Carbon)
end: DateTime (Carbon)
use SoftDeletes (for tracking cancels)
hasOne('Employee')
hasOne('Patient')

**Availability**
day: 0 int ('Monday')
hasMany('Block')
hasOne('Employee')

**Block**
startTime: 8am (Carbon)
endTime: 5pm (Carbon)
isBreak: false
hasMany(

**Employee**
capacity: 2 int
hasMany('Availability')
hasMany('Schedule')

*all models would typically have an id and timestamps provided as well in their data structure*

## Functions

	// utilities
    function getDiffInMinutes($start, $end)
    {
      $startTime = Carbon::parse($start);
      $endTime = Carbon::parse($end);
      return $startTime->diffInMinutes($endTime);
    }


    function getDateRange($startDate, $endDate)
    {
      $start = Carbon::parse($startDate);
      $end = Carbon::parse($endDate);
      return $start->diffInDays($end);
    }


    function getDayTotalSlots($day, $minutesPerSlot, $employee) {
      $totalMinutes = 0;

      $blocks = Availability::where([
	     ['employee_id', $employee['id']],
         ['day', $day]
	  ])->first()->blocks()->get();

      foreach ($blocks as $block) {
	      $diff = getDiffInMinutes($block['start'], $block['end']);
	      $block['isBread'] ? $totalMinutes -= $diff : $totalMinutes += $diff;
      }

     return ($totalMinutes * $employee['capacity']) / $minutesPerSlot;
    }


    public function getSingleAppointmentSlots($appointment, $minutesPerSlot)
    {
      $duration = getDiffInMinutes($appointment['start'], $appointment['end']);
      return $duration / $minutesPerSlot;
    }


    public function getEmployeeUtilization($startDate, $endDate, $employee, $minutesPerSlot)
    {
      $totalAvailableSlots = 0;
      $totalBookedSlots = 0;
      $range = $this->getDateRange($startDate, $endDate);

      for ($x = 0; $x <= $range - 1; $x++) {
	      $date = Carbon::parse($startDate)->addDays($x);
	      $day = $date->dayOfWeek;
	      $totalAvailableSlots += getDayTotalSlots($day, $minutesPerSlot, $employee);

	      $appts = Appointments::where([
		     ['date', $date],
		     ['employee_id', $employee['id']]
	     ])->get();

	      foreach ($appts as $appointment) {
		      $totalBookedSlots += $this->getSingleAppointmentSlots($appointment, $minutesPerSlot);
	      }
       }
       return ($totalBookedSlots / $totalAvailableSlots) * 100;
    }

    public static function getCapacityUtilization($startDate, $endDate, $employees, $minutesPerSlot)
    {
      $employeeUtilization = [];
      $totalUtilization = 0;

      foreach ($employees as $employee) {
	      $utilization = getEmployeeUtilization($startDate, $endDate, $employee, $minutesPerSlot);
	      array_push($employeeUtilization, ['employee' => $employee, 'utilization' => $utilization]);
	      $totalUtilization += $utilization;
      }

      return [ 'employeeUtilization' => $employeeUtilization, 'aggregateUtilization' => $totalUtilization / count($employeeUtilization)];

    }


