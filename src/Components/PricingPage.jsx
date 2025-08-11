import { createSignal, For } from 'solid-js';

const PricingPage = () => {
    const [selectedPlan, setSelectedPlan] = createSignal('standard');

    const pricingPlans = [
        {
            id: 'value',
            name: 'Value',
            price: '49,999',
            currency: 'Rs.',
            description: '+ Rs. 69,999 after Admit',
            features: [
                {
                    allowed:true,
                    description:'1 Intake'
                },
                {
                    allowed:true,
                    description:'Application Support'
                },
                {
                    allowed:true,
                    description:'Document Review'
                },
                {
                    allowed:true,
                    description:'Email Support'
                },
                {
                    allowed:true,
                    description:'Basic Profile Evaluation'
                }
                
            ],
            buttonText: 'Enroll Now',
            buttonStyle: 'outline',
            popular: false,
            gradient: 'linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%)',
            iconColor: '#4fc3f7'
        },
        {
            id: 'standard',
            name: 'Standard',
            price: '49,999',
            currency: 'Rs.',
            description: ' Rs. 19,999 after Admit',
            features: [
                {
                    allowed:true,
                    description:'1 Intake'
                },
                {
                    allowed:true,
                    description:'Priority Support'
                },
                {
                    allowed:true,
                    description:'Interview Preparation'
                },
                {
                    allowed:true,
                    description:'Scholarship Guidance'
                },
                {
                    allowed:true,
                    description:'Visa Application Support'
                },
                {
                    allowed:false,
                    description:'Pre-departure Briefing'
                }
            ],
            buttonText: 'Enroll Now',
            buttonStyle: 'outline',
            popular: true,
            gradient: 'linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)',
            iconColor: '#0277bd'
        },
        {
            id: 'premium',
            name: 'Premium',
            price: '1,69,999',
            currency: 'Rs.',
            description: '',
            features: [
                {
                    allowed:true,
                    description:'2 Intakes'
                },
                {
                    allowed:true,
                    description:'Unlimited Applications'
                },
                {
                    allowed:true,
                    description:'24/7 Premium Support'
                },
                {
                    allowed:true,
                    description:'Personal Counselor'
                },
                {
                    allowed:true,
                    description:'Post-arrival Support'
                },
                {
                    allowed:true,
                    description:'Career Guidance'
                }
            ],
            buttonText: 'Contact Us',
            buttonStyle: 'filled',
            popular: false,
            gradient: 'linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%)',
            iconColor: '#6a1b9a'
        }
    ];

    const handlePlanSelect = (planId) => {
        setSelectedPlan(planId);
    };

    const handleEnroll = (plan) => {
        if (plan.buttonText === 'Contact Us') {
            // Trigger modal or contact form
            console.log('Opening contact form for:', plan.name);
        } else {
            console.log('Enrolling in plan:', plan.name);
        }
    };

    return (
        <div class="pricing-page">
            <div class="container">
                <div class="pricing-header">
                    <h2>Choose Your Study Abroad Package</h2>
                    <p>Select the perfect plan to kickstart your German study adventure</p>
                </div>

                <div class="pricing-grid">
                    <For each={pricingPlans}>
                        {(plan) => (
                            <div 
                                class={`pricing-card ${selectedPlan() === plan.id ? 'selected' : ''} ${plan.popular ? 'popular' : ''}`}
                                onClick={() => handlePlanSelect(plan.id)}
                            >
                                {plan.popular && (
                                    <div class="popular-badge">Most Popular</div>
                                )}
                                
                                <div 
                                    class="card-header"
                                    style={{ background: plan.gradient }}
                                >
                                    <div class="plan-icon">
                                        <div 
                                            class="icon-circle"
                                            style={{ 'background-color': plan.iconColor }}
                                        >
                                            {plan.id === 'value' && (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white"/>
                                                </svg>
                                            )}
                                            {plan.id === 'standard' && (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="white"/>
                                                </svg>
                                            )}
                                            {plan.id === 'premium' && (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V18H19V19Z" fill="white"/>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div class="card-content">
                                    <h3 class="plan-name">{plan.name}</h3>
                                    
                                    <div class="price-section">
                                        <div class="price">
                                            <span class="currency">{plan.currency}</span>
                                            <span class="amount">{plan.price}</span>
                                        </div>
                                        <p class="price-description">{plan.description}</p>
                                    </div>

                                                                         <div class="features-list">
                                         <For each={plan.features}>
                                             {(feature) => (
                                                 <div class={`feature-item ${!feature.allowed ? 'feature-disabled' : ''}`}>
                                                     {feature.allowed && (
                                                         <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                             <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#4caf50"/>
                                                         </svg>
                                                     )}
                                                     {!feature.allowed && (
                                                         <svg class="cross-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                             <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#ef4444"/>
                                                         </svg>
                                                     )}
                                                     <span>{feature.description}</span>
                                                 </div>
                                             )}
                                         </For>
                                     </div>

                                    <button 
                                        class={`plan-button ${plan.buttonStyle}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleEnroll(plan);
                                        }}
                                    >
                                        {plan.buttonText}
                                    </button>
                                </div>
                            </div>
                        )}
                    </For>
                </div>

                <div class="pricing-footer">
                   
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
