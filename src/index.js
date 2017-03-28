import brew from 'brew-eq';

// ==============================
// Calculating the mash bill
// ==============================

let finalGravityInput, finalVolumeInput, totalGravitySpan;

const calculateTotalGUs = () => {
  const finalGravity = brew.toGU(Number.parseFloat(finalGravityInput.value)) || 0;
  const finalVolume = Number.parseFloat(finalVolumeInput.value) || 0;
  const totalGravity = Number.parseInt(brew.totalGravity(finalVolume, finalGravity));
  console.log(finalGravity, finalVolume, totalGravity);
  totalGravitySpan.innerText = totalGravity;
};

finalGravityInput = document.querySelector('#final-gravity')
finalGravityInput.addEventListener('keyup', calculateTotalGUs);

finalVolumeInput = document.querySelector('#final-volume')
finalVolumeInput.addEventListener('keyup', calculateTotalGUs);

totalGravitySpan = document.querySelector('#total-gravity');
